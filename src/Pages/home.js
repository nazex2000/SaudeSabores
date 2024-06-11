// src/Login.js
import axios from 'axios';
import 'antd/dist/reset.css';
import React from 'react';
import { Form, Input, Button, notification, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group';
import { FaArrowRight, FaEye, FaFacebook, FaInstagram, FaLocationArrow, FaMailBulk, FaMailchimp, FaPhone, FaRegArrowAltCircleRight, FaSearchLocation, FaTwitter, FaUsers } from 'react-icons/fa';
import { MdLocationPin, MdMenu, MdMenuOpen, MdTrendingUp, MdVisibility } from 'react-icons/md';
import '../Components/css/home.css';
import '../Components/css/mobile.css';

const Home = () => {
    const [loading, setLoading] = React.useState(false)
    const [menu, setMenu] = React.useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
            <div className="flex flex-col h-full bg-white sm:bg-white items-center" id='home'>
                <div className="navbar w-full flex flex-row justify-between items-center">
                    <div className='flex flex-row items-center w-full justify-between mx-auto px-5 sm:px-0' style={{ maxWidth: '1100px' }}>
                        <img
                            src={require('../assets/logo/ss.png')}
                            className='w-16'
                        />
                        <div className="flex flex-row items-center gap-14 menu-bar">
                            <p className='text-menu'>
                                <a href='#home'>Home</a>
                            </p>
                            <p className='text-menu'>
                                <a href='#about'>Sobre nós</a>
                            </p>
                            <p className='text-menu'>
                                <a href='#products'>Produtos</a>
                            </p>
                            <p className='text-menu'>
                                <a href='#contact'>Contactos</a>
                            </p>
                        </div>
                        {menu ?
                            <MdMenuOpen onClick={handleMenu} size={30} color='#fbbd00' className='block sm:hidden menu-icon menu-bar-icon' />
                            : <MdMenu onClick={handleMenu} size={30} color='#fbbd00' className='block sm:hidden menu-icon menu-bar-icon' />}
                    </div>
                </div>

                <div className='relative w-full main-page'>
                    {menu && <>
                        <div className='menu-bar-mobile block sm:hidden'>
                            <p className='text-menu'>
                                <FaArrowRight size={17} color='#fbbd00' />
                                <a href='#home' onClick={handleMenu}>Home</a>
                            </p>
                            <p className='text-menu'>
                                <FaArrowRight size={17} color='#fbbd00' />
                                <a href='#about' onClick={handleMenu}>Sobre nós</a>
                            </p>
                            <p className='text-menu'>
                                <FaArrowRight size={17} color='#fbbd00' />
                                <a href='#products' onClick={handleMenu}>Produtos</a>
                            </p>
                            <p className='text-menu'>
                                <FaArrowRight size={17} color='#fbbd00' />
                                <a href='#contact' onClick={handleMenu}>Contactos</a>
                            </p>
                        </div>
                    </>}
                    <img
                        src={require('../assets/images/bananeira.png')}
                        className='banana-over'
                    />
                    <div className='mid-container'>
                        <div className='mid-content'>
                            <p className='mid-title'>Saúde e Sabores</p>
                            <p className='mid-subtitle'>Focada em alimentos sustentáveis e orgânicos</p>
                            <div className='flex flex-row gap-4 mt-3 w-full sm:w-auto'>
                                <div className='mid-input'>
                                    <p className='mid-input-title'>O QUE É SAÚDE E SABORES?</p>
                                </div>
                                <div className='mid-button' style={{ height: '5vh' }}>
                                    <p className='mid-button-title'><a href='#about'>saber mais</a></p>
                                </div>
                            </div>
                        </div>
                        <div className='mid-right'>
                            <img
                                src={require('../assets/images/chips.png')}
                                className='h-full icon-main'
                            />
                        </div>
                    </div>
                    <div className='flex flex-row justify-between p-6 w-full'>
                        <div className='card w-full mx-auto my-6' style={{ maxWidth: '1100px' }}>
                            <img
                                src={require('../assets/images/chips-ss.jpeg')}
                                className='chips-icon'
                            />
                            <div className='card-content'>
                                <p className='card-about-title'><span style={{ color: '#FFB30E' }}>Informação</span> Nutricional</p>
                                <table className='table-nutri w-full'>
                                    <tr>
                                        <td className='table-title'>Energia</td>
                                        <td className='table-value'>516.61</td>
                                        <td className='table-unit'>Kcal</td>
                                    </tr>
                                    <tr>
                                        <td className='table-title'>Proteina</td>
                                        <td className='table-value'>1.98</td>
                                        <td className='table-unit'>g</td>
                                    </tr>
                                    <tr>
                                        <td className='table-title'>Carboidrato</td>
                                        <td className='table-value'>67.3</td>
                                        <td className='table-unit'>g</td>
                                    </tr>
                                    <tr>
                                        <td className='table-title'>Gordura Total</td>
                                        <td className='table-value'>26.61</td>
                                        <td className='table-unit'>g</td>
                                    </tr>
                                    <tr>
                                        <td className='table-title'>Açucar</td>
                                        <td className='table-value'>0</td>
                                        <td className='table-unit'>g</td>
                                    </tr>
                                </table>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center align-center p-6 w-full' id='about'>
                        <p className='card-title'>Sobre Nós</p>
                        <div className='flex flex-row mx-auto gap-4 grid grid-cols-1 sm:grid-cols-3 mt-8' style={{ maxWidth: '1100px' }}>
                            <div className='flex flex-col justify-start align-center gap-2 px-5'>
                                <MdLocationPin size={100} className='icon-about mx-auto' />
                                <p className='card-subtitle'>Missão</p>
                                <p className='card-text'>
                                    O Nosso compromisso é produzir e proporcionar Snack saudáveis e deliciosos,
                                    usando ingredientes naturais e minimamente processados.
                                </p>
                            </div>
                            <div className='flex flex-col justify-start align-center gap-2 px-5'>
                                <MdVisibility size={100} className='icon-about mx-auto' />
                                <p className='card-subtitle'>Visão</p>
                                <p className='card-text'>
                                    Ser líder e referencia a nível de Moçambique e África Austral na produção e
                                    venda de snacks.
                                </p>
                            </div>
                            <div className='flex flex-col justify-start align-center gap-2 px-5'>
                                <MdTrendingUp size={100} className='icon-about mx-auto' />
                                <p className='card-subtitle'>Valores</p>
                                <p className='card-text'>
                                    Temos o comprometimento com a promoção de opções de
                                    Snacks que contribuem para uma alimentação saudável.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between p-6 w-full'>
                        <div className='card w-full mx-auto my-3' style={{ maxWidth: '1100px' }}>
                            <img
                                src={require('../assets/images/chips-hand.jpg')}
                                className='chips-icon'
                            />
                            <div className='card-content'>
                                <p className='card-about-title t-left'>Breve descrição da <span style={{ color: '#FFB30E' }}>Saúde & Sabores</span></p>
                                <p className='card-about-text'>
                                    A Saúde & Sabores é mais do que uma empresa de snacks, é uma celebração da diversidade, da paixão pelos aperitivos e da resiliência
                                    diante dos desafios. Cada aperitivo é uma pequena obra-prima, contando a história de como uma ideia simples se transformou em um
                                    deleite que transcende o paladar, nutrindo tanto o corpo quanto o espírito. A jornada continua, e cada chip é um capítulo novo e
                                    delicioso na história em evolução da startup.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between p-6 w-full'>
                        <div className='card w-full mx-auto my-3' style={{ maxWidth: '1100px' }}>
                            <div className='card-content'>
                                <p className='card-about-title t-left'>Informação sobre a <span style={{ color: '#FFB30E' }}>Banana</span></p>
                                <p className='card-about-text py-2'>
                                    A banana é uma fruta tropical amplamente cultivada e apreciada em todo o mundo. Originária do
                                    sudeste asiático, a banana é conhecida por seu sabor doce e textura macia. Rica em nutrientes,
                                    a banana é uma excelente fonte de potássio, vitamina B6, vitamina C e fibras. Esses nutrientes são importantes para a saúde cardiovascular, a função muscular e a digestão.
                                </p>
                                <div className='button-about w-full'>
                                    <p className='mid-button-title'>SABER MAIS</p>
                                    <FaRegArrowAltCircleRight size={20} color='white' />
                                </div>
                            </div>
                            <img
                                src={require('../assets/images/criando-banana.gif')}
                                className='chips-icon ch-right'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center align-center w-full relative overflow-hidden p-6' id='products'>
                        <p className='card-title'>Produtos</p>
                        <div className='card w-full mx-auto my-3 mt-5' style={{ maxWidth: '1100px' }}>
                            <div className='card-content-pro'>
                                <p className='card-about-title t-left'>Conheça a <span style={{ color: '#FFB30E' }}>Banana Chips</span></p>
                                <p className='card-about-text py-2'>
                                    Banana Chips são snacks saudáveis e saborosos, feito a partir de bananas selecionadas, garantindo a máxima qualidade e frescor. As
                                    Banana Chips são uma alternativa nutritiva aos snacks tradicionais, ricas em fibras, potássio e outros nutrientes essenciais. Perfeitas
                                    para qualquer ocasião, elas proporcionam uma combinação irresistível, ideal para quem busca um lanche saudável sem abrir mão do sabor, e
                                    contrapartida reduzir o tédio.
                                </p>
                            </div>
                            <img
                                src={require('../assets/images/chips-ss.jpeg')}
                                className='chips-icon-2 ch-right'
                            />
                        </div>
                        <div className='flex flex-row mx-auto gap-4 grid grid-cols-1 sm:grid-cols-3 mt-2' style={{ maxWidth: '1100px' }}>
                            <div className='card-product'>
                                <img
                                    src={require('../assets/images/chips-banana.jpg')}
                                    className='w-full h-48 object-cover product-image'
                                />
                                <div className='product-content'>
                                    <p className='product-title'>Chips de Batata Doce</p>
                                    <p className='product-text'>
                                        Deliciosos chips de banana, feitos com ingredientes naturais e sem adição de conservantes.
                                    </p>
                                    <div className='button-about w-full'>
                                        <p className='mid-button-title'>SABER MAIS</p>
                                        <FaRegArrowAltCircleRight size={20} color='white' />
                                    </div>
                                </div>
                            </div>
                            <div className='card-product'>
                                <img
                                    src={require('../assets/images/chips-mandioca.jpg')}
                                    className='w-full h-48 object-cover product-image'
                                />
                                <div className='product-content'>
                                    <p className='product-title'>Chips de Mandioca</p>
                                    <p className='product-text'>
                                        Deliciosos chips de Mandioca, feitos com ingredientes naturais e sem adição de conservantes.
                                    </p>
                                    <div className='button-about w-full'>
                                        <p className='mid-button-title'>SABER MAIS</p>
                                        <FaRegArrowAltCircleRight size={20} color='white' />
                                    </div>
                                </div>
                            </div>
                            <div className='card-product'>
                                <img
                                    src={require('../assets/images/geleia-jams.png')}
                                    className='w-full h-48 object-cover product-image'
                                />
                                <div className='product-content'>
                                    <p className='product-title'>Compotas, Geleias e Jams</p>
                                    <p className='product-text'>
                                        Deliciosos chips de Mandioca, feitos com ingredientes naturais e sem adição de conservantes.
                                    </p>
                                    <div className='button-about w-full'>
                                        <p className='mid-button-title'>SABER MAIS</p>
                                        <FaRegArrowAltCircleRight size={20} color='white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center align-center w-full mt-8' id='contact'>
                            <p className='card-title'>Contactos</p>
                            <div className='contact-container mx-auto w-full mt-7' style={{ maxWidth: '1100px' }}>
                                <div className='left-contact-container'>
                                    <div className='contact-title'>
                                        Informações de Contacto
                                    </div>
                                    <div className='contact-content'>
                                        <div className='cc-item'>
                                            <FaPhone size={17} color='white' />
                                            <p className='cc-text'>
                                                +258 84-273-3858
                                            </p>
                                        </div>
                                        <div className='cc-item'>
                                            <FaMailBulk size={17} color='white' />
                                            <p className='cc-text'>
                                                demo@gmail.com
                                            </p>
                                        </div>
                                        <div className='cc-item'>
                                            <FaLocationArrow size={17} color='white' />
                                            <p className='cc-text'>
                                                Moçambique, Maputo
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row gap-4 cc-bottom'>
                                        <div className='rounded-full p-2 cc-icon cursor-pointer'>
                                            <FaTwitter size={17} color='white' />
                                        </div>
                                        <div className='rounded-full p-2 bg-white cursor-pointer'>
                                            <FaInstagram size={17} color='black' />
                                        </div>
                                        <div className='rounded-full p-2 cc-icon cursor-pointer'>
                                            <FaFacebook size={17} color='white' />
                                        </div>
                                    </div>
                                </div>
                                <div className='right-contact-container'>
                                    <div className='grid grid-cols-2 gap-8'>
                                        <div className='flex flex-col'>
                                            <p className='cc-label'>Primeiro Nome</p>
                                            <input className='cc-input' placeholder='Joe' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='cc-label'>Último Nome</p>
                                            <input className='cc-input' placeholder='James' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='cc-label'>Email</p>
                                            <input className='cc-input' placeholder='joe@james.com' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <p className='cc-label'>Número de Telefone</p>
                                            <input className='cc-input' placeholder='+258 8X XXX XXXX' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-6'>
                                        <p className='cc-label'>Mensagem</p>
                                        <textarea className='cc-input' placeholder='Escreva a sua mensagem.' />
                                    </div>
                                    <div className='button-about w-1/2 ml-auto mt-6'>
                                        <p className='mid-button-title'>ENVIAR MENSAGEM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col justify-center align-center w-full'>
                        <div className='container-parc'>
                            <div className='flex flex-row gap-6 w-full mx-auto  grid grid-cols-1 sm:grid-cols-3' style={{ maxWidth: '1100px' }}>
                                <img
                                    src={require('../assets/images/incubadora.png')}
                                    className='icon-parc m-auto'
                                />
                                <img
                                    src={require('../assets/images/ciuem.png')}
                                    className='icon-parc m-auto'
                                />
                                <img
                                    src={require('../assets/images/EDI.png')}
                                    className='icon-parc m-auto'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        <div className='footer-content'>
                            <div className='flex flex-col sm:flex-row gap-8 sm:gap-16 w-full'>
                                <div className='flex flex-col gap-2'>
                                    <p className='footer-subtitle'>Links Rápidos</p>
                                    <p className='footer-text'>
                                        <a href='#home'>Home</a>
                                    </p>
                                    <p className='footer-text'>
                                        <a href='#home'>Sobre nós</a>
                                    </p>
                                    <p className='footer-text'>
                                        <a href='#home'>Produtos</a>
                                    </p>
                                    <p className='footer-text'>
                                        <a href='#home'>Contactos</a>
                                    </p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='footer-subtitle'>Contactos</p>
                                    <p className='footer-text'>
                                        <FaPhone size={17} color='white' />
                                        +258 84-273-3858
                                    </p>
                                    <p className='footer-text'>
                                        <FaMailBulk size={17} color='white' />
                                        demo@gmail.com
                                    </p>
                                    <p className='footer-text'>
                                        <FaLocationArrow size={17} color='white' />
                                        Moçambique, Maputo
                                    </p>
                                </div>
                                <div className='footer-newsletter'>
                                    <p className='footer-subtitle'>Junta-te à nossa Newsletter</p>
                                    <div className='flex flex-row bg-white rounded-lg'>
                                        <input className='newsletter-input' placeholder='Insira o seu email' />
                                        <div className='button-about w-1/2'>
                                            <p className='mid-button-title'>SUBSCREVER</p>
                                        </div>
                                    </div>
                                    <p className='footer-text mt-5'>
                                        *Subscreva a nossa newsletter para receber as últimas novidades e promoções.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='footer-bottom mt-10'>
                            <p className='text-white text-xs'>
                                © 2024 <a>Codeware Solutions</a>. Todos os direitos reservados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Home;
