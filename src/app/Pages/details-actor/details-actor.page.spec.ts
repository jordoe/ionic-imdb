import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsActorPage } from './details-actor.page';

describe('DetailsActorPage', () => {
  let component: DetailsActorPage;
  let fixture: ComponentFixture<DetailsActorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsActorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsActorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
