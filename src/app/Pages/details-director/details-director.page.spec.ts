import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsDirectorPage } from './details-director.page';

describe('DetailsDirectorPage', () => {
  let component: DetailsDirectorPage;
  let fixture: ComponentFixture<DetailsDirectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDirectorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsDirectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
