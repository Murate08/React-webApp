import React from 'react';




const Modal = () => {
  return (
      <>
     <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
         <div class="modal-content">
             <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fa fa-times"></i></span>
            </button>
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                         
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Cadastre-se e encontre boleia</h2>
                    
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fa fa-mobile"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>
                        
                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="" />

                            <p class="mb-5">
                                Para criar uma conta e encontrar boleia, o usuário precisa:<br/>
                                Baixar o <a href="#">aplicativo</a>;<br/>
                                Preencher todos os campos obrigatórios no formulário de registro;
                                Ter lido e aceitado estes <a href="#">Termos e Compromissos</a> e a <a href="#">Política de Privacidade</a>.
                                A plataforma permite que os membros visualizem anúncios de boleia, e que interejam com os condutores que pretendam seguir o mesmo itinerário. 
                                O usuário fará o pedido de boleia através da plataforma e terá que esperar pela confirmação do condutor. Ao solicitar a reserva de viagem, o usuário poderá visualizar o montante da contribuição de custos especificado pelo condutor.
                                Ao confirmar-se o pedido, o membro pode entrar em contacto com o condutor e com ele estabelecer os locais de recolha e chegada.

                            </p>
                            <button class="btn btn-primary" data-dismiss="modal">
                                <i class="fa fa-times fa-fw"></i>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fa fa-times"></i></span>
            </button>
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                         
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal2Label">Espere a Boleia</h2>
                       
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fa fa-bus"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>
                      
                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="" />
                 
                            <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                            <button class="btn btn-primary" data-dismiss="modal">
                                <i class="fa fa-times fa-fw"></i>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fa fa-times"></i></span>
            </button>
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                  
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal3Label">Cadastre-se e dê boleia</h2>
                          
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fa fa-hand-o-down"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>
                            
                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="" />
                 
                            <p class="mb-5">
                            Para criar uma conta e dar boleia, o usuário precisa:<br/>
                            Baixar o <a href="">aplicativo</a> ;<br/>
                            Preencher todos os campos obrigatórios no formulário de registro;
                            Ter lido e aceitado estes <a href="#">Termos e Compromissos</a> e a <a href="#">Política de Privacidade</a>.
                            A plataforma permite que os membros publiquem anúncios de boleia, e que interejam com os viajantes que pretendam seguir o mesmo itinerário. 
                            O usuário pode publicar anúncios de boleia na plataforma introduzindo informações acerca do local de partida e chegada da viagem que pretende fazer, especificando o montante da contribuição de custos(referente ao custo minimo estabelecido por km/pessoa).
                            Ao publicar o seu anúncio de boleia, o membro pode entrar em contacto com os viajantes e com eles estabelecer os locais de recolha e chegada.
                            </p>
                            <button class="btn btn-primary" data-dismiss="modal">
                                <i class="fa fa-times fa-fw"></i>
                                Fechar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
    
  )
}

export default Modal;