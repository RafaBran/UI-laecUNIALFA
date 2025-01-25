import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './components/agenda/agenda.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { ProcedimentosComponent } from './components/procedimentos/procedimentos.component';
import { RegulamentoComponent } from './components/regulamento/regulamento.component';
import { InformacoesComponent } from './components/informacoes/informacoes.component';

const routes: Routes = [
  { path: '', redirectTo: '/informacoes', pathMatch: 'full' },
  { path: 'agenda', component: AgendaComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'gerenciamento', component: GerenciamentoComponent },
  { path: 'procedimentos', component: ProcedimentosComponent },
  { path: 'regulamento', component: RegulamentoComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'informacoes', component: InformacoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
