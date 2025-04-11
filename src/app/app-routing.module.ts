import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './components/equipe/equipe.component';
import { GerenciamentoComponent } from './components/gerenciamento/gerenciamento.component';
import { InformacoesComponent } from './components/informacoes/informacoes.component';
import { AulasPraticasComponent } from './components/aulas-praticas/aulas-praticas.component';
import { AnaliseDoComportamentoComponent } from './components/informacoes/analise-do-comportamento/analise-do-comportamento.component';
import { ArtigosETextosComponent } from './components/informacoes/artigos-e-textos/artigos-e-textos.component';
import { EticaComponent } from './components/informacoes/etica/etica.component';
import { MonitoriaComponent } from './components/informacoes/monitoria/monitoria.component';

const routes: Routes = [
  { path: '', redirectTo: '/informacoes', pathMatch: 'full' },
  {
    path: 'informacoes',
    component: InformacoesComponent,
    children: [
      {
        path: 'analise-do-comportamento',
        component: AnaliseDoComportamentoComponent,
        outlet: 'informacoes-menu',
      },
      {
        path: 'artigos-e-textos',
        component: ArtigosETextosComponent,
        outlet: 'informacoes-menu',
      },
      {
        path: 'etica',
        component: EticaComponent,
        outlet: 'informacoes-menu',
      },
      {
        path: 'monitoria',
        component: MonitoriaComponent,
        outlet: 'informacoes-menu',
      },
    ],
  },

  // Outras rotas principais
  { path: 'aulas-praticas', component: AulasPraticasComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'gerenciamento', component: GerenciamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
