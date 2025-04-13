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
import { ContatoProfessorComponent } from './components/equipe/contato-professor/contato-professor.component';
import { ContatoTecnicoComponent } from './components/equipe/contato-tecnico/contato-tecnico.component';
import { ContatoHadasaComponent } from './components/equipe/contato-hadasa/contato-hadasa.component';
import { ContatoKatarineComponent } from './components/equipe/contato-katarine/contato-katarine.component';
import { ContatoMilenaComponent } from './components/equipe/contato-milena/contato-milena.component';
import { ContatoMatheusComponent } from './components/equipe/contato-matheus/contato-matheus.component';
import { ContatoAmandaComponent } from './components/equipe/contato-amanda/contato-amanda.component';
import { ContatoJuliaComponent } from './components/equipe/contato-julia/contato-julia.component';

const routes: Routes = [
  { path: '', redirectTo: '/informacoes/(informacoes-menu:analise-do-comportamento)', pathMatch: 'full' },
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
  { path: 'contato-professor', component: ContatoProfessorComponent },
  { path: 'contato-tecnico', component: ContatoTecnicoComponent },
  { path: 'contato-hadasa', component: ContatoHadasaComponent },
  { path: 'contato-katarine', component: ContatoKatarineComponent },
  { path: 'contato-milena', component: ContatoMilenaComponent },
  { path: 'contato-matheus', component: ContatoMatheusComponent },
  { path: 'contato-amanda', component: ContatoAmandaComponent },
  { path: 'contato-julia', component: ContatoJuliaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
