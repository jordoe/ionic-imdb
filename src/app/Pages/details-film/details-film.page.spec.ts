import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsFilmPage } from './details-film.page';

describe('DetailsFilmPage', () => {
  let component: DetailsFilmPage;
  let fixture: ComponentFixture<DetailsFilmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsFilmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
