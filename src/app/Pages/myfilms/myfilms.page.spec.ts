import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyfilmsPage } from './myfilms.page';

describe('MyfilmsPage', () => {
  let component: MyfilmsPage;
  let fixture: ComponentFixture<MyfilmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfilmsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyfilmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
