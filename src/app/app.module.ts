import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegulamentoComponent } from './components/regulamento/regulamento.component';
import { InformacoesComponent } from './components/informacoes/informacoes.component';
import { ProcedimentosComponent } from './components/procedimentos/procedimentos.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegulamentoComponent,
    InformacoesComponent,
    ProcedimentosComponent,
    AgendaComponent,
    EquipeComponent,
    GerenciamentoComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
