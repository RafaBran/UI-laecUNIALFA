import { A2025s2Component } from './components/aulas-praticas/agenda/ano-per/a2025s2/a2025s2.component';
import { A2025s1Component } from './components/aulas-praticas/agenda/ano-per/a2025s1/a2025s1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeComponent } from './components/equipe/equipe.component';
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
import { ProcedimentosComponent } from './components/aulas-praticas/procedimentos/procedimentos.component';
import { LinhaDeBaseComponent } from './components/aulas-praticas/procedimentos/linha-de-base/linha-de-base.component';
import { TreinoAoBebedouroComponent } from './components/aulas-praticas/procedimentos/treino-ao-bebedouro/treino-ao-bebedouro.component';
import { ModelagemComponent } from './components/aulas-praticas/procedimentos/modelagem/modelagem.component';
import { CrfComponent } from './components/aulas-praticas/procedimentos/crf/crf.component';
import { ExtincaoComponent } from './components/aulas-praticas/procedimentos/extincao/extincao.component';
import { RecondicionamentoComponent } from './components/aulas-praticas/procedimentos/recondicionamento/recondicionamento.component';
import { EsquemaRazaoFixaComponent } from './components/aulas-praticas/procedimentos/esquema-razao-fixa/esquema-razao-fixa.component';
import { EsquemaRazaoVariavelComponent } from './components/aulas-praticas/procedimentos/esquema-razao-variavel/esquema-razao-variavel.component';
import { TreinoDiscriminativoComponent } from './components/aulas-praticas/procedimentos/treino-discriminativo/treino-discriminativo.component';
import { IntervaloFixoComponent } from './components/aulas-praticas/procedimentos/intervalo-fixo/intervalo-fixo.component';
import { IntervaloVariavelComponent } from './components/aulas-praticas/procedimentos/intervalo-variavel/intervalo-variavel.component';
import { EncadeamentoComponent } from './components/aulas-praticas/procedimentos/encadeamento/encadeamento.component';
import { AnoPerComponent } from './components/aulas-praticas/agenda/ano-per/ano-per.component';
import { LoginComponent } from './components/login/login.component';
import { A2025s1BuenoNComponent } from './components/aulas-praticas/agenda/ano-per/a2025s1/a2025s1-bueno-n/a2025s1-bueno-n.component';
import { A2025s1BuenoMComponent } from './components/aulas-praticas/agenda/ano-per/a2025s1/a2025s1-bueno-m/a2025s1-bueno-m.component';
import { A2025s1PerimetralNComponent } from './components/aulas-praticas/agenda/ano-per/a2025s1/a2025s1-perimetral-n/a2025s1-perimetral-n.component';
import { Aula01BuenoM20251Component } from './components/aulas-praticas/agenda/ano-per/a2025s1/a2025s1-bueno-m/aula01-bueno-m20251/aula01-bueno-m20251.component';
import { SelecaoTurmaComponent } from './components/aulas-praticas/selecao-turma/selecao-turma.component';

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

  { path: 'ano-semestre', component: AnoPerComponent },
  { path: 'a2025s1', component: A2025s1Component },

  { path: 'a2025s1-bueno-matutino',
    component: A2025s1BuenoMComponent,
    children: [
      {
        path: 'aula01-bueno-m20251',
        component: Aula01BuenoM20251Component,
        outlet: 'a2025s1-bueno-matutino',
      }
    ]},

    { path: 'a2025s1-bueno-noturno', component: A2025s1BuenoNComponent },
  { path: 'a2025s1-perimetral-noturno', component: A2025s1PerimetralNComponent },
  { path: 'a2025s2', component: A2025s2Component },
  { path: 'aulas-praticas', component: AulasPraticasComponent },
  {
    path: 'procedimentos',
    component: ProcedimentosComponent,
    children: [
      {
        path: 'linha-base',
        component: LinhaDeBaseComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'treino-bebedouro',
        component: TreinoAoBebedouroComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'modelagem',
        component: ModelagemComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'crf',
        component: CrfComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'extincao',
        component: ExtincaoComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'recondicionamento',
        component: RecondicionamentoComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'razao-fixa',
        component: EsquemaRazaoFixaComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'razao-variavel',
        component: EsquemaRazaoVariavelComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'intervalo-fixo',
        component: IntervaloFixoComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'intervalo-variavel',
        component: IntervaloVariavelComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'treino-discriminativo',
        component: TreinoDiscriminativoComponent,
        outlet: 'procedimentos',
      },
      {
        path: 'encadeamento',
        component: EncadeamentoComponent,
        outlet: 'procedimentos',
      },
    ],
  },
  { path: 'uso-laboratorio', component: SelecaoTurmaComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'login', component: LoginComponent },
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
