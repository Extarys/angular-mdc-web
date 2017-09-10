import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MdcFabComponent, MdcFabModule, MdcFabIconDirective } from '../../../src/lib/fab';
import { MdcRippleModule } from '../../../src/lib/ripple';

describe('MdcFabComponent', () => {
  let component: MdcFabComponent;
  let root: ComponentFixture<MdcFabComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdcFabModule, MdcRippleModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    root = TestBed.createComponent(MdcFabComponent);
    component = root.componentInstance;
    de = root.debugElement;
    el = de.nativeElement;
  });

  it('#should have a defined component - MdcFabComponent', () => {
    expect(component).toBeDefined();
  });

  it('#should add the css class mdc-fab to the host element', () => {
    root.detectChanges();
    expect(el.classList.contains('mdc-fab')).toBe(true);
  });

  it('#mini should be false initially', () => {
    root.detectChanges();
    expect(component.mini).toBe(undefined);
  });
});
