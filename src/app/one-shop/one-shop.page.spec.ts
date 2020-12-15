import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneShopPage } from './one-shop.page';

describe('OneShopPage', () => {
  let component: OneShopPage;
  let fixture: ComponentFixture<OneShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneShopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
