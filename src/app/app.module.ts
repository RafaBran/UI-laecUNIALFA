import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InformacoesComponent } from './components/informacoes/informacoes.component';
import { EquipeComponent } from './components/equipe/equipe.component';
import { AnaliseDoComportamentoComponent } from './components/informacoes/analise-do-comportamento/analise-do-comportamento.component';
import { ArtigosETextosComponent } from './components/informacoes/artigos-e-textos/artigos-e-textos.component';
import { EticaComponent } from './components/informacoes/etica/etica.component';
import { MonitoriaComponent } from './components/informacoes/monitoria/monitoria.component';
import { FormsModule } from '@angular/forms';
import { ProcedimentosComponent } from './components/aulas-praticas/procedimentos/procedimentos.component';
import { ContatoProfessorComponent } from './components/equipe/contato-professor/contato-professor.component';
import { ContatoTecnicoComponent } from './components/equipe/contato-tecnico/contato-tecnico.component';
import { ContatoAmandaComponent } from './components/equipe/contato-amanda/contato-amanda.component';
import { ContatoJuliaComponent } from './components/equipe/contato-julia/contato-julia.component';
import { ContatoMatheusComponent } from './components/equipe/contato-matheus/contato-matheus.component';
import { ContatoHadasaComponent } from './components/equipe/contato-hadasa/contato-hadasa.component';
import { ContatoKatarineComponent } from './components/equipe/contato-katarine/contato-katarine.component';
import { LinhaDeBaseComponent } from './components/aulas-praticas/procedimentos/linha-de-base/linha-de-base.component';
import { TreinoAoBebedouroComponent } from './components/aulas-praticas/procedimentos/treino-ao-bebedouro/treino-ao-bebedouro.component';
import { ModelagemComponent } from './components/aulas-praticas/procedimentos/modelagem/modelagem.component';
import { CrfComponent } from './components/aulas-praticas/procedimentos/crf/crf.component';
import { ContatoMilenaComponent } from './components/equipe/contato-milena/contato-milena.component';
import { ExtincaoComponent } from './components/aulas-praticas/procedimentos/extincao/extincao.component';
import { RecondicionamentoComponent } from './components/aulas-praticas/procedimentos/recondicionamento/recondicionamento.component';
import { EsquemaRazaoFixaComponent } from './components/aulas-praticas/procedimentos/esquema-razao-fixa/esquema-razao-fixa.component';
import { EsquemaRazaoVariavelComponent } from './components/aulas-praticas/procedimentos/esquema-razao-variavel/esquema-razao-variavel.component';
import { TreinoDiscriminativoComponent } from './components/aulas-praticas/procedimentos/treino-discriminativo/treino-discriminativo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { IntervaloFixoComponent } from './components/aulas-praticas/procedimentos/intervalo-fixo/intervalo-fixo.component';
import { IntervaloVariavelComponent } from './components/aulas-praticas/procedimentos/intervalo-variavel/intervalo-variavel.component';
import { EncadeamentoComponent } from './components/aulas-praticas/procedimentos/encadeamento/encadeamento.component';
import { LoginComponent } from './components/login/login.component';
import { SelecaoTurmaComponent } from './components/aulas-praticas/selecao-turma/selecao-turma.component';
import { BuenoMatutinoComponent } from './components/aulas-praticas/selecao-turma/bueno-matutino/bueno-matutino.component';
import { BuenoNoturnoComponent } from './components/aulas-praticas/selecao-turma/bueno-noturno/bueno-noturno.component';
import { PerimetralNoturnoComponent } from './components/aulas-praticas/selecao-turma/perimetral-noturno/perimetral-noturno.component';
import { Data1Component } from './components/aulas-praticas/selecao-turma/bueno-matutino/data1/data1.component';
import { Data1pComponent } from './components/aulas-praticas/selecao-turma/perimetral-noturno/data1p/data1p.component';
import { GerenciamentoComponent } from './components/login/gerenciamento/gerenciamento.component';
import { UsuariosComponent } from './components/login/gerenciamento/usuarios/usuarios.component';
import { GruposComponent } from './components/login/gerenciamento/grupos/grupos.component';
import { TurmasComponent } from './components/login/gerenciamento/turmas/turmas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InformacoesComponent,
    EquipeComponent,
    AnaliseDoComportamentoComponent,
    ArtigosETextosComponent,
    EticaComponent,
    MonitoriaComponent,
    ProcedimentosComponent,
    ContatoProfessorComponent,
    ContatoTecnicoComponent,
    ContatoAmandaComponent,
    ContatoJuliaComponent,
    ContatoMatheusComponent,
    ContatoHadasaComponent,
    ContatoKatarineComponent,
    LinhaDeBaseComponent,
    TreinoAoBebedouroComponent,
    ModelagemComponent,
    CrfComponent,
    ContatoMilenaComponent,
    ExtincaoComponent,
    RecondicionamentoComponent,
    EsquemaRazaoFixaComponent,
    EsquemaRazaoVariavelComponent,
    TreinoDiscriminativoComponent,
    IntervaloFixoComponent,
    IntervaloVariavelComponent,
    EncadeamentoComponent,
    LoginComponent,
    SelecaoTurmaComponent,
    BuenoMatutinoComponent,
    BuenoNoturnoComponent,
    PerimetralNoturnoComponent,
    Data1Component,
    Data1pComponent,
    GerenciamentoComponent,
    UsuariosComponent,
    GruposComponent,
    TurmasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
