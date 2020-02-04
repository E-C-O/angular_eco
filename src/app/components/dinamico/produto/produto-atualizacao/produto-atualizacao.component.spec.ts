import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAtualizacaoComponent } from './produto-atualizacao.component';

describe('ProdutoAtualizacaoComponent', () => {
  let component: ProdutoAtualizacaoComponent;
  let fixture: ComponentFixture<ProdutoAtualizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoAtualizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAtualizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
