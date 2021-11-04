//Destaque da Semana.

//--------------------------------------------------------------------E-----------------------------------------------------------------//

//Desc - E
var desc_E = []//Array que ira receber as informações.
var d_imgs_E = [] 
desc_E = document.querySelectorAll('p#nome-e, p#desen-e, p#dist-e')
d_imgs_E = document.querySelectorAll('img#des-e-imgl1')


//Caracteristicas - E.
var carac_E = []
carac_E = document.querySelectorAll('p#p-e-1, p#p-e-2, p#p-e-3, p#p-e-4, p#p-e-5')


//Trocando adicionando texto e imagem = Desc - E.
desc_E[0].innerHTML += "1"
//desc_E[1].innerHTML += "2"
//desc_E[2].innerHTML += "3"
d_imgs_E[0].setAttribute('src','../imagens/witcher.jpg')


//Trocando adicionando caracateristicas. - E
carac_E[0].innerHTML += "carac-1"
//carac_E[1].innerHTML += "carac-2"
//carac_E[2].innerHTML += "carac-3"
//carac_E[3].innerHTML += "carac-4"
//carac_E[4].innerHTML += "carac-4"


//--------------------------------------------------------------------D-----------------------------------------------------------------//

//Desc - D
var desc_D = []//Array que ira as informações.
var d_imgs_D = [] 
desc_D = document.querySelectorAll('p#nome-d, p#desen-d, p#dist-d')
d_imgs_D = document.querySelectorAll('img#des-d-imgl1')


//Caracteristicas - D.
var carac_D = []
carac_D = document.querySelectorAll('p#p-d-1, p#p-d-2, p#p-d-3, p#p-d-4, p#p-d-5')


//Trocando adicionando texto e imagem = Desc - D.
desc_D[0].innerHTML += "Jogo2"
//desc_D[1].innerHTML += "D1"
//desc_D[2].innerHTML += "D2"
d_imgs_D[0].setAttribute('src','../imagens/Nier.jpg')


//Trocando adicionando caracateristicas. - D
carac_D[0].innerHTML += "carac-1"
//carac_D[1].innerHTML += "carac-2"
//carac_D[2].innerHTML += "carac-3"
//carac_D[3].innerHTML += "carac-4"
//carac_D[4].innerHTML += "carac-4"








//########################################################################################################################################################################

//Lançamentos.

var lan_imgs = []//Array que ira receber as imagens.                                                                                                        
var lan_imgs = document.querySelectorAll('img#img-l1,img#img-l2,img#img-l3,img#img-l4,img#img-l5,img#img-l6,img#img-l7,img#img-l8,img#img-l9,img#img-l10')


//Trocando as imagens 'placeholder'.

lan_imgs[0].setAttribute('src','../imagens/need.jpg')
lan_imgs[1].setAttribute('src','../imagens/dbz.jpg')
lan_imgs[2].setAttribute('src','../imagens/scroll.jpg')
lan_imgs[3].setAttribute('src','../imagens/shadow.jpg')
lan_imgs[4].setAttribute('src','../imagens/cod.jpg')
lan_imgs[5].setAttribute('src','../imagens/nioh-2-1.jpg')
lan_imgs[6].setAttribute('src','../imagens/The_Last.png')
//lan_imgs[7].setAttribute('src','')
//lan_imgs[8].setAttribute('src','')
//lan_imgs[9].setAttribute('src','')





//########################################################################################################################################################################

//Noticias.

//Imagens.
var not_imgs = []
var not_imgs = document.querySelectorAll('img#img-not1,img#img-not2,img#img-not3,img#img-not4,img#img-not5,img#img-not6')

not_imgs[0].setAttribute('src','../imagens/1.jpg')
not_imgs[1].setAttribute('src','../imagens/1.jpg')
not_imgs[2].setAttribute('src','../imagens/1.jpg')
not_imgs[3].setAttribute('src','../imagens/1.jpg')
not_imgs[4].setAttribute('src','../imagens/1.jpg')
not_imgs[5].setAttribute('src','../imagens/1.jpg')

//Texto.
var not_texto = []
var not_texto = document.querySelectorAll('p#not-texto1,p#not-texto2,p#not-texto3,p#not-texto4,p#not-texto5,p#not-texto6')

not_texto[0].innerHTML = 'funcionou'
//not_texto[1].innerHTML = 'funcionou'
//not_texto[2].innerHTML = 'funcionou'
//not_texto[3].innerHTML = 'funcionou'
//not_texto[4].innerHTML = 'funcionou'
//not_texto[5].innerHTML = 'funcionou'

//########################################################################################################################################################################

//Promoções.

//Imagens.
var promo_imgs = []
var promo_imgs = document.querySelectorAll('img#promo-img1,img#promo-img2,img#promo-img3,img#promo-img4,img#promo-img5,img#promo-img6,img#promo-img7')

promo_imgs[0].setAttribute('src','../Imagens/miniaturas/biomutant.jpg')
promo_imgs[1].setAttribute('src','../Imagens/miniaturas/cities skylines.jpg')
promo_imgs[2].setAttribute('src','../Imagens/miniaturas/conan exiles.jpg')
promo_imgs[3].setAttribute('src','../Imagens/miniaturas/crusader kings III royal.jpg')
promo_imgs[4].setAttribute('src','../Imagens/miniaturas/cyberpunk 2077.jpg')
promo_imgs[5].setAttribute('src','../Imagens/miniaturas/daysgone.jpg')
promo_imgs[6].setAttribute('src','../Imagens/miniaturas/empireofsin.jpg')


//Titulo.
var promo_texto = []
var promo_texto = document.querySelectorAll('p#promo-p1,p#promo-p2,p#promo-p3,p#promo-p4,p#promo-p5,p#promo-p6,p#promo-p7')

promo_texto[0].innerHTML = 'BIOMUTANT'
//promo_texto[1].innerHTML = 'CITIES SKYLINES'
//promo_texto[2].innerHTML = ''
//promo_texto[3].innerHTML = ''
//promo_texto[4].innerHTML = ''
//promo_texto[5].innerHTML = ''
//promo_texto[6].innerHTML = ''


//Desconto.
var promo_desc = []
var promo_desc = document.querySelectorAll('div#desconto1,div#desconto2,div#desconto3,div#desconto4,div#desconto5,div#desconto6,div#desconto7')

promo_desc[0].innerHTML = "-17%"
//promo_desc[1].innerHTML = "-14%"
//promo_desc[2].innerHTML = "-14%"
//promo_desc[3].innerHTML = "-14%"
//promo_desc[4].innerHTML = "-14%"
//promo_desc[5].innerHTML = "-14%"
//promo_desc[6].innerHTML = "-14%"


//Preço.
var promo_preç = []
var promo_preç = document.querySelectorAll('button#btn1,button#btn2,button#btn3,button#btn4,button#btn5,button#btn6,button#btn7')

promo_preç[0].innerHTML = "R$200,00"
//promo_preç[1].innerHTML = "R$200,00"
//promo_preç[2].innerHTML = "R$200,00"
//promo_preç[3].innerHTML = "R$200,00"
//promo_preç[4].innerHTML = "R$200,00"
//promo_preç[5].innerHTML = "R$200,00"
//promo_preç[6].innerHTML = "R$200,00"