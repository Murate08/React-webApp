import React from 'react';
import './App.css';
import './css/navbar.css';
import image from '../src/assets/banner.jpg';
import userphone from './assets/userphone.jpg';
import call from './assets/ser.jpg';
import drivephone from './assets/drivephone.jpg';
import ayad from './assets/ayad.JPG';
import dope from './assets/ayad.JPG';
import shere from './assets/ela.jpg';
import liga from './assets/center.jpg';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Modal from './components/modal'





function App() {
  return (
    <div className="App">
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">DOE</a>
        <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fa fa-bar"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Funcionalidades</a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#startup">Startup</a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">Sobre-nos</a></li>
                <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">DIGA-NOS</a></li>
            </ul>
        </div>
    </div>
</nav>

<header class="masthead">
<div class="row" id="headerText">
    <div class="col-md-6 col-sm-12" >
        <h2>
            diga-me onde estas?
          </h2>
          <p>
          Encontre viajantes/condutores seguindo o mesmo destino que o seu e dispostos a compartilhar os custos da viagem.
          
          </p>
          <p>A melhor maneira para locomover-se de forma rápida e fácil nas tuas mãos</p>
      
    </div>
    <div class="col-md-6 col-sm-12">
    <img src={image}/>
     
    </div>
  </div>
</header>

<section class="page-section portfolio" id="portfolio">
    <div class="container">

        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-2">doe boleia</h2>
 
        <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fa fa-mobile"></i></div>
            <div class="divider-custom-line"></div>
        </div>
     
        <div class="row">
          
            <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fa fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src={userphone} alt="" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Procure Boleia</h5>                       
                    </div>
                </div>
            </div>
     
            <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fa fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src={call} alt="" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Espere a Boleia</h5>                       
                    </div>
                </div>
            </div>
        
            <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="fa fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src={drivephone} alt="" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Ofereca uma Boleia</h5>                       
                    </div>
                </div>
            </div>
        
          </div>
    </div>
</section>

<section class="page-section bg-primary text-white mb-0" id="startup">
    <div class="container">
     
        <h4 class="page-section-heading text-center text-uppercase ">A procura de motivos para usar a DOE?</h4>

        <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon" ><i class="fa fa-mobile"></i></div>
            <div class="divider-custom-line"></div>
        </div>
       
        <div class="row">
            <div class="col-lg-12">
              <p class="lead">Dê boas vindas ao mais novo membro da grande família moçambicana que vem para resolver e ajudar!
              </p>
              <h5>
              Você se sente sufocado com os custos de combustivél?
              </h5>
              <p>
                Baixa já o aplicativo e tenha a possibilidade de oferecer boleia e compartilhar os custos das tuas viagens diárias com outros usuários.
              </p>
              <h5>
                Você deseja chegar ao seu destino de maneira rápida e confortável?
              </h5>
              <p>
                Baixa já o aplicativo e encontre anúncios de boleia seguindo o mesmo itinerário que o seu ao custo mais baixo do mercado.
              </p>
              <span class="slogon">
              Com a DOE é fácil, rápido e barato. Vamos?
              </span>

            
            
            </div>
          
        </div>
      
     
    </div>
</section>

<section class="page-section" id="about">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Sobre-nos</h2>
                    <h4 class="section-subheading text-muted text-uppercase">doe</h4>
                </div>
                <ul class="timeline">
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={ayad} alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="text-uppercase">CEO-Founder</h4>
                                <h5 class="subheading text-uppercase">Ayad Ossaile</h5>
                            </div>
                            <div class="timeline-body">
                              <h6 class="text-uppercase">engenheiro de Softwere</h6>
                              <p class="text-muted">
                                  Fazer a descricao estou a pensar como mentir o publico, com experiencia que ne existe.....hahahaah
                              
                              </p>
                              </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={dope} alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                              <h4 class="text-uppercase">COO-Founder</h4>
                              <h5 class="subheading text-uppercase">Gertides Magaia</h5>
                            </div>
                            <div class="timeline-body">
                              <h6 class="text-uppercase">engenheiro civil e de transporte</h6>
                              <p class="text-muted">
                              Fazer a descricao estou a pensar como mentir o publico, com experiencia que ne existe.....hahahaah
                              
                              </p>
                              </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={shere} alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>Missão</h4>
                                <h4 class="subheading">Melhorar a mobilidade urbana</h4>
                            </div>
                            <div class="timeline-body">
                              <p class="text-muted">
                              Atuar no sector de transportes procurando essencialmente
                               facilitar a interação entre quem procura e entre quem fornece serviços de transporte 
                               através de plataformas digitais, buscando sempre satisfazer as necessidades
                               dos clientes de uma maneira simples, rápida e eficaz.
                              </p>
                              </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image"><img class="rounded-circle img-fluid" src={liga} alt="" /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4>Visão</h4>
                                <h4 class="subheading">Moçambique na Mão</h4>
                            </div>
                            <div class="timeline-body">
                              <p class="text-muted">
                              Tornar-se referência nacional/internacional como plataforma capaz de ampliar a atuação dos diferentes serviços de transportes, tornando flexíveis e dinâmicas a mobilidade urbana e territorial.
                              </p>
                              </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>
                                Diga-me
                                <br />
                                onde
                                <br />
                                estas?
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

<section class="page-section" id="contact">
    <div class="container">
    
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Diga-nos</h2>
  
        <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fa fa-phone-square"></i></div>
            <div class="divider-custom-line"></div>
        </div>
   
        <div class="row">
            <div class="col-lg-8 mx-auto">
               
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Nome</label>
                            <input class="form-control" id="name" type="text" placeholder="Nome" required="required" data-validation-required-message="Please enter your name." />
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Email Address</label>
                            <input class="form-control" id="email" type="email" placeholder="Email" required="required" data-validation-required-message="Please enter your email address." />
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Phone Number</label>
                            <input class="form-control" id="phone" type="tel" placeholder="Numero de Telefone" required="required" data-validation-required-message="Please enter your phone number." />
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="form-group floating-label-form-group controls mb-0 pb-2">
                            <label>Message</label>
                            <textarea class="form-control" id="message" rows="5" placeholder="Deixe a tua mensagem" required="required" data-validation-required-message="Please enter a message."></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <br />
                    <div id="success"></div>
                    <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Enviar</button></div>
                </form>
            </div>
        </div>
    </div>
</section>

<footer class="footer text-center">
    <div class="container">
        <div class="row">
    
            <div class="col-lg-4 mb-5 mb-lg-0">
                <h4 class="text-uppercase mb-4">Localização</h4>
                <p class="lead mb-0">
                    Av de Moçambique
                    <br />
                    Zimpeto-Av: Nelson Mandela
                </p>
            </div>
        
            <div class="col-lg-4 mb-5 mb-lg-0">
                <h4 class="text-uppercase mb-4">REDES SOCIAIS</h4>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fa fa-fw fa-facebook-f"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fa fa-fw fa-twitter"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fa fa-fw fa-instagram"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fa fa-fw fa-whatsapp"></i></a>
                
            </div>
 
            <div class="col-lg-4  mb-5 mb-lg-0">
                <h4 class="text-uppercase mb-4">Baixe os aplicativos</h4>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fa fa-fw fa-android"></i></a>
                <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fa fa-fw fa-apple"></i></a>
                <p class="p2">
                <a href="#">Política de Privacidade</a><br/>
                <a href="#">Termos e Condições</a>
                </p>      
            </div>
        </div>
    </div>
</footer>
        <div class="copyright py-4 text-center text-white">
            <div class="container"><small>Copyright © DOE - 2020</small></div>
              
        </div>
        <Modal/>
       
        
</div>

  );
}

export default App;
