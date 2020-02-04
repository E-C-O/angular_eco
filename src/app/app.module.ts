import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinamicoComponent } from './components/dinamico/dinamico.component';
import { EstaticoComponent } from './components/estatico/estatico.component';
import { HomeComponent } from './components/dinamico/home/home.component';
import { EmpresaComponent } from './components/dinamico/sobre-nos/empresa/empresa.component';
import { EquipeComponent } from './components/dinamico/sobre-nos/equipe/equipe.component';
import { AjudaComponent } from './components/dinamico/ajuda/ajuda.component';
import { AssociadosComponent } from './components/dinamico/associados/associados.component';
import { ContatoComponent } from './components/dinamico/contato/contato.component';
import { ProdutoListaComponent } from './components/dinamico/produto/produto-lista/produto-lista.component';
import { ProdutoCadastroComponent } from './components/dinamico/produto/produto-cadastro/produto-cadastro.component';
import { ProdutoIdComponent } from './components/dinamico/produto/produto-id/produto-id.component';
import { ProdutoAtualizacaoComponent } from './components/dinamico/produto/produto-atualizacao/produto-atualizacao.component';
import { NavbarComponent } from './components/estatico/navbar/navbar.component';
import { HeaderComponent } from './components/estatico/header/header.component';
import { BodyComponent } from './components/estatico/body/body.component';
import { FooterComponent } from './components/estatico/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DinamicoComponent,
    EstaticoComponent,
    HomeComponent,
    EmpresaComponent,
    EquipeComponent,
    AjudaComponent,
    AssociadosComponent,
    ContatoComponent,
    ProdutoListaComponent,
    ProdutoCadastroComponent,
    ProdutoIdComponent,
    ProdutoAtualizacaoComponent,
    NavbarComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
