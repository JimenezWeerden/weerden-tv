import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as GitHubCalendar from 'github-calendar';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VattenfallComponent } from '../projects/vattenfall/vattenfall.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RabobankComponent } from '../projects/rabobank/rabobank.component';
import { GrowthKeeperComponent } from '../projects/growth-keeper/growth-keeper.component';
import { TippiqComponent } from '../projects/tippiq/tippiq.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

require('jquery-rss');

// expose for testing
export const dependencies = {
  GitHubCalendar
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  modalRef: NgbModalRef;
  destroy$ = new Subject();

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {
    route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        const projectComponent = this.projectMap[params?.project];
        projectComponent
          ? this.openProjectDialog(projectComponent)
          : this.removeQueryParams();
      });
  }

  ngOnInit(): void {
    this.loadRSSFeed();
    this.initGithubCalendar();
    this.resetLevelBar();
  }

  ngAfterViewInit(): void {
    this.animateLevelBar();
  }

  resetLevelBar(): void {
    $('.level-bar-inner').css('width', '0');
  }

  animateLevelBar(): void {
    $('.level-bar-inner').each(function() {
      const itemWidth = $(this).data('level');
      $(this).animate({
        width: itemWidth
      }, 800);
    });
  }

  initGithubCalendar(): void {
    dependencies.GitHubCalendar('#github-graph', 'jimenezweerden');
  }

  loadRSSFeed(): void {
    // @ts-ignore
    $('#rss-feeds').rss(
      'https://jimenezweerden.wordpress.com/feed/',
      {
        limit: 3,
        effect: 'slideFastSynced',
        ssl: true,
        layoutTemplate: '<div class=\'items\'>{entries}</div>',
        entryTemplate: `
        <div class='item'>
        <h3 class='title'>
        <a href='{url}' target='_blank'>{title}</a>
        </h3>
        <div>
        <p>{shortBodyPlain}...</p>
        <a class='more-link' href='{url}' target='_blank'>
        <i class='fas fa-external-link-alt'></i>Read more</a>
        </div>
        </div>
        `
      }
    );
  }

  openProjectDialog(projectComponent: Component): void {
    this.modalRef = this.modalService.open(projectComponent);
    this.modalRef.result.then(
      () => this.removeQueryParams(),
      () => this.removeQueryParams()
    );
  }

  removeQueryParams(): void {
    this.modalRef?.close();
    this.router.navigate(['.'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private projectMap: { [key: string]: any } = {
    'vattenfall': VattenfallComponent,
    'rabobank': RabobankComponent,
    'growth-keeper': GrowthKeeperComponent,
    'tippiq': TippiqComponent,
  };
}
