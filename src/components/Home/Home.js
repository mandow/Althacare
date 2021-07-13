import React, { Component } from 'react'
import Logo from '../../assets/images/logos/logotipo.png'
import FrascoMedicamentos from '../../assets/images/home/althacarev2.jpg'
import RelacionesComerciales from '../../assets/images/home/bgrelacionescomerciales.jpg'
import EspecialidadesHuman from '../../assets/images/home/especialidadeshuman-580x613.png';
import Necesidades from '../../assets/images/home/necesidadespil.png';
import EspecialidaesColor from '../../assets/images/home/bgespecialidaescolor.jpg'
import Logistica from '../../assets/images/home/logisticapil.png'
import Hospitales from '../../assets/images/home/hospitalespil.png'
import ContactoColor from '../../assets/images/home/bgcontactocolor.jpg'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="p-4 text-light" style={{ backgroundColor: "#EF3340" }}>
                    <div className="row" style={{ fontSize: "1rem" }}>
                        <div className="col-xs-12 col-md-4 text-center ">
                            <Link to="/login">
                                <button className="btn btn-light" style={{ color: "#EF3340" }}>
                                    Login
                                </button>
                            </Link>
                        </div>
                        <div className="col-xs-12 col-md-4 text-center">
                            Entregamos medicamentoes que salvan vidas
                        </div>
                        <div className="col-xs-12 col-md-4 text-center">
                            <div className="row p-auto m-auto">
                                <div className="col-xs-12 col-md-4 text-right">Pagadores</div>
                                <div className="col-xs-12 col-md-4 text-left">Laboratorios</div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white mb-md-4 ">
                    <div className="container-fluid">

                        <div className="navbar-brand" >
                            <img
                                src={Logo}
                                alt="logo-althacare"
                            />
                        </div>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item fw-bold">
                                    <Link to="" className="nav-link active" style={{ color: "#535353!important" }}>
                                        Ubicacion
                                    </Link>
                                </li>
                                <li className="nav-item fw-bold">
                                    <Link to="" className="nav-link active" style={{ color: "#535353!important" }}>
                                        Especialidades
                                    </Link>

                                </li>
                                <li className="nav-item fw-bold">
                                    <Link to="" className="nav-link active" style={{ color: "#535353!important" }}>
                                        Pacientes
                                    </Link>

                                </li>
                                <li className="nav-item fw-bold">
                                    <Link to="" className="nav-link active" style={{ color: "#535353!important" }}>
                                        Servicios
                                    </Link>
                                </li>
                                <li className="nav-item fw-bold">
                                    <Link to="" className="nav-link active" style={{ color: "#535353!important" }}>
                                        Corporativo
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr />
                <div className="">
                    <div className="separator" />
                    <div id="main" className="site-main">
                        <div id="main-content" className="main-content">
                            <div className="block-content no-bottom-margin no-top-margin">
                                <div className="container">
                                    <div className="panel row">
                                        <div className="panel-center col-xs-12">
                                            <article
                                                id="post-11"
                                                className="post-11 page type-page status-publish"
                                            >
                                                <div className="entry-content post-content">

                                                    <div id="nosotros" className="row">
                                                        <div className="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                                                            <div className="vc_column-inner ">
                                                                <div className="wpb_wrapper">
                                                                    <div className="wpb_single_image wpb_content_element vc_align_left  wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft wpb_start_animation animated">
                                                                        <figure className="wpb_wrapper vc_figure">
                                                                            <div className="vc_single_image-wrapper   vc_box_border_grey">
                                                                                <img
                                                                                    width={300}
                                                                                    height={85}
                                                                                    src={Logo}
                                                                                    alt="logo althacare"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                />
                                                                            </div>
                                                                        </figure>
                                                                    </div>
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft parrafosresponsivos wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p style={{ textAlign: "left" }}>
                                                                                <span
                                                                                    style={{
                                                                                        color: "#797979",
                                                                                        textAlign: "left"
                                                                                    }}
                                                                                >
                                                                                    <span style={{ color: "#d63440" }}>
                                                                                        <strong>
                                                                                            althacare<sup>®</sup>
                                                                                        </strong>
                                                                                    </span>{" "}
                                                                                    tiene un enfoque orientado a
                                                                                    los&nbsp;medicamentos más innovadores y
                                                                                    especializados en la industria farmacéutica
                                                                                    (medicamentos de difícil acceso) no
                                                                                    disponibles en México, que requieren
                                                                                    importarse del extranjero.{" "}
                                                                                </span>
                                                                            </p>
                                                                            <p style={{ textAlign: "left" }}>
                                                                                <span
                                                                                    style={{
                                                                                        color: "#797979",
                                                                                        textAlign: "left"
                                                                                    }}
                                                                                >
                                                                                    Esto obedece a la creciente necesidad por
                                                                                    parte de médicos especialistas, Compañías
                                                                                    Aseguradoras, áreas de compras en hospitales
                                                                                    y clínicas, ya que sus pacientes requieren
                                                                                    el mejor tratamiento médico posible, recién
                                                                                    aprobado por FDA y/o EMA.
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                                                            <div className="vc_column-inner ">
                                                                <img
                                                                    src={FrascoMedicamentos}
                                                                    alt="Imagen frasco medicamentos"
                                                                    className="img-fluid"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="col-sm-12 col-lg-12 col-md-12 col-xs-12"
                                                            style={{ marginTop: "7vh", marginBottom: "7vh" }}
                                                        >
                                                            <div className="vc_column-inner ">
                                                                <div className="wpb_wrapper">
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 45 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft parrafosresponsivos wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p
                                                                                style={{
                                                                                    fontSize: 23,
                                                                                    fontFamily: '"Roboto Slab" !important',
                                                                                    textAlign: "center"
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    style={{
                                                                                        color: "#797979",
                                                                                        textAlign: "left"
                                                                                    }}
                                                                                >
                                                                                    La propuesta de valor de
                                                                                    <span style={{ color: "#d63440" }}>
                                                                                        <strong>
                                                                                            althacare<sup>®</sup>
                                                                                        </strong>
                                                                                    </span>
                                                                                    se basa en mejorar la salud de
                                                                                    <br /> los pacientes dándoles acceso a la
                                                                                    mejor medicina del mundo.
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="comerciales"
                                                        data-vc-full-width="true"
                                                        data-vc-full-width-init="true"
                                                        className="row"
                                                        style={{
                                                            backgroundImage: `url(${RelacionesComerciales})`,
                                                            backgroundPosition: "center !important",
                                                            backgroundRepeat: "no-repeat !important",
                                                            backgroundSize: "cover !important"
                                                        }}
                                                    >
                                                        <div className="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                                                            <div className="vc_column-inner ">
                                                                <div className="wpb_wrapper">
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_bounceInDown bounceInDown vc_custom_1553876228768 h4 wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p className="h4">
                                                                                <span style={{ color: "#d63440" }}>
                                                                                    RELACIONES COMERCIALES
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 14 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                    <div className=" h4 ">
                                                                        <div className="wpb_wrapper">
                                                                            <p>
                                                                                <strong
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        lineHeight: "1.2"
                                                                                    }}
                                                                                >
                                                                                    Construimos relaciones comerciales de largo
                                                                                    plazo con Aseguradoras, Bancos y Empresas
                                                                                </strong>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="vc_row wpb_row vc_inner vc_row-fluid">
                                                                        <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                            <div className="vc_column-inner ">
                                                                                <div className="wpb_wrapper" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                            <div className="vc_column-inner ">
                                                                                <div className="wpb_wrapper">
                                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft paddingtext wpb_start_animation animated">
                                                                                        <div className="wpb_wrapper">
                                                                                            <h2
                                                                                                style={{
                                                                                                    lineHeight: "1.4",
                                                                                                    fontSize: 22,
                                                                                                    fontFamily:
                                                                                                        '"Roboto Slab" !important',
                                                                                                    textTransform: "none"
                                                                                                }}
                                                                                            >
                                                                                                <span style={{ color: "#5d6771" }}>
                                                                                                    Realmente nos importa tu salud
                                                                                                </span>
                                                                                            </h2>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                                                            <div className="vc_column-inner ">
                                                                <div className="wpb_wrapper">
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p>
                                                                                <strong
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        color: "#d63440",
                                                                                        fontSize: 24
                                                                                    }}
                                                                                >
                                                                                    Alta cliente-proveedor
                                                                                </strong>
                                                                                <br /> Contamos con toda la documentación
                                                                                necesaria para llevar a cabo la firma de
                                                                                convenios y contratos con clientes
                                                                                institucionales.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 14 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p>
                                                                                <strong
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        color: "#d63440",
                                                                                        fontSize: 24
                                                                                    }}
                                                                                >
                                                                                    Catálogo de productos y precios
                                                                                </strong>
                                                                                <br /> Nuestro catálogo de medicamentos se
                                                                                actualiza en tiempo real diariamente. La
                                                                                disponibilidad y precios pueden variar de
                                                                                acuerdo a la confirmación del pedido.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 14 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p>
                                                                                <strong
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        color: "#d63440",
                                                                                        fontSize: 24
                                                                                    }}
                                                                                >
                                                                                    Pedidos, facturación y entregas
                                                                                </strong>
                                                                                <br /> Los pedidos se reciben en{" "}
                                                                                <span style={{ color: "#d63440" }}>
                                                                                    rx@althacare.com
                                                                                </span>
                                                                                , y se confirman para facturación al momento
                                                                                del pago, enviando a la misma dirección de
                                                                                correo el comprobante. Una vez pagado,
                                                                                confirmado el pedido y facturado, se programa
                                                                                la entrega (tenemos cobertura en todo el país)
                                                                                y al momento de recibir nuestro cliente firma
                                                                                de recibido.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 14 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p>
                                                                                <strong
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        color: "#d63440",
                                                                                        fontSize: 24
                                                                                    }}
                                                                                >
                                                                                    Tiempo de entrega
                                                                                </strong>
                                                                                <br /> Si el pago se confirma entre lunes y
                                                                                miércoles, la entrega se realiza al lunes
                                                                                siguiente. En promedio son 4 días hábiles, sin
                                                                                embargo, puede variar de acuerdo a los tiempos
                                                                                que el propio cliente requiera, dependiendo la
                                                                                naturaleza del medicamento o producto.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 14 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p>
                                                                                <strong
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        color: "#d63440",
                                                                                        fontSize: 24
                                                                                    }}
                                                                                >
                                                                                    Refill: Tratamientos recurrentes
                                                                                </strong>
                                                                                <br /> Después de un primer pedido, la
                                                                                recurrencia necesaria de cada medicamento es
                                                                                administrada por nosotros en coordinación con
                                                                                el cliente / paciente.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 14 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        id="especialidades"
                                                        data-vc-full-width="true"
                                                        data-vc-full-width-init="true"
                                                        data-vc-stretch-content="true"
                                                        className="row"
                                                    >
                                                        <div className="separator"></div>
                                                        <div className="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                                                            <div>
                                                                <div className="wpb_wrapper">
                                                                    <div className="">
                                                                        <figure className="wpb_wrapper vc_figure">
                                                                            <div className="vc_single_image-wrapper   vc_box_border_grey">
                                                                                <img
                                                                                    className="img-fluid"
                                                                                    src={Logo}
                                                                                    width={190}
                                                                                    height={54}
                                                                                    alt="logo althacare"
                                                                                    title="logoalthacarenewv2"
                                                                                />
                                                                            </div>
                                                                        </figure>
                                                                    </div>
                                                                    <div className="animated">
                                                                        <div className="wpb_wrapper">
                                                                            <h2
                                                                                style={{
                                                                                    textAlign: "center",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    className="fontstyle0"
                                                                                    style={{
                                                                                        color: "#7e848a",
                                                                                        lineHeight: "1.1"
                                                                                    }}
                                                                                >
                                                                                    Principales especialidades médicas
                                                                                </span>
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                    <div className="wpb_single_image wpb_content_element vc_align_center  wpb_animate_when_almost_visible wpb_flipInY flipInY wpb_start_animation animated">
                                                                        <figure className="wpb_wrapper vc_figure">
                                                                            <div className="vc_single_image-wrapper   vc_box_border_grey">
                                                                                <img
                                                                                    className="img-fluid "
                                                                                    src={EspecialidadesHuman}
                                                                                    width={580}
                                                                                    height={613}
                                                                                    alt="especialidades althacare"
                                                                                    title="especialidadeshuman"
                                                                                />
                                                                            </div>
                                                                        </figure>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-lg-6 col-md-6 col-xs-12">
                                                            <div
                                                                className="p-3"
                                                                style={{
                                                                    height: "100%",
                                                                    backgroundImage: `url(${EspecialidaesColor})`,
                                                                    backgroundPosition: "bottom !important",
                                                                    backgroundRepeat: "no-repeat !important",
                                                                    backgroundSize: "cover !important"
                                                                }}
                                                            >
                                                                <div className="wpb_wrapper">
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 20 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                    <div className="h4">
                                                                        <div className="wpb_wrapper">
                                                                            <p className="h4">
                                                                                <span
                                                                                    style={{
                                                                                        color: "#ffffff",
                                                                                        fontFamily: '"Roboto Slab"'
                                                                                    }}
                                                                                >
                                                                                    Equipo de trabajo:
                                                                                </span>
                                                                            </p>
                                                                            <p>
                                                                                <span
                                                                                    style={{
                                                                                        color: "#ffffff",
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        lineHeight: "1.2"
                                                                                    }}
                                                                                >
                                                                                    <strong>
                                                                                        Experiencia + Pasión
                                                                                        <br /> por lo que hacemos.
                                                                                    </strong>
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 10 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                    <div className="">
                                                                        <div className="wpb_wrapper">
                                                                            <p style={{ textAlign: "justify" }}>
                                                                                <span style={{ color: "#ffffff" }}>
                                                                                    La estructura organizacional de{" "}
                                                                                    <strong>
                                                                                        althacare<sup>®</sup>
                                                                                    </strong>{" "}
                                                                                    está diseñada estratégicamente para atender
                                                                                    a pacientes particulares y clientes
                                                                                    institucionales que buscan surtir recetas
                                                                                    médicas complejas. Esta dinámica requiere de
                                                                                    un proveedor experto y con experiencia, como{" "}
                                                                                    <strong>
                                                                                        althacare<sup>®</sup>
                                                                                    </strong>
                                                                                    , quien de manera consistente, segura y
                                                                                    profesional, cubre las necesidades
                                                                                    específicas de cada solicitud.{" "}
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 20 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                    <div className="">
                                                                        <div className="wpb_wrapper">
                                                                            <p style={{ textAlign: "justify" }}>
                                                                                <span
                                                                                    style={{
                                                                                        color: "#ffffff",
                                                                                        fontSize: 20,
                                                                                        lineHeight: "1.5"
                                                                                    }}
                                                                                >
                                                                                    <strong>
                                                                                        En{" "}
                                                                                        <span
                                                                                            style={{ fontFamily: '"Roboto Slab"' }}
                                                                                        >
                                                                                            althacare<sup>®</sup>
                                                                                        </span>
                                                                                    </strong>
                                                                                    <br />
                                                                                    <strong>
                                                                                        {" "}
                                                                                        servimos al paciente
                                                                                        <br /> con la más alta ética
                                                                                        <br /> profesional y<br />
                                                                                        responsabilidad.
                                                                                    </strong>
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vc_row-full-width vc_clearfix" />
                                                    <div className="vc_row-full-width-before" />
                                                    <div
                                                        id="servicios"
                                                        data-vc-full-width="true"
                                                        data-vc-full-width-init="true"
                                                        className="row"
                                                    >
                                                        <div className="col-sm-12">
                                                            <div className="vc_column-inner ">
                                                                <div className="wpb_wrapper">
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_bounceInDown bounceInDown vc_custom_1553876299337 h4 wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p className="h4">
                                                                                <span style={{ color: "#d63440" }}>
                                                                                    SERVICIOS
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 14 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_bounceInDown bounceInDown vc_custom_1553803026286 wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p>
                                                                                <strong
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        fontSize: 24
                                                                                    }}
                                                                                >
                                                                                    Acceso asequible a la mejor medicina para
                                                                                    todos los pacientes en América.
                                                                                </strong>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="vc_empty_space"
                                                                        style={{ height: 20 }}
                                                                    >
                                                                        <span className="vc_empty_space_inner" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="vc_column-inner vc_custom_1552413017364">
                                                                <div className="wpb_wrapper">
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft serviciosalthacare service1althacare wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p>
                                                                                <img
                                                                                    className="aligncenter img-fluid"
                                                                                    src={Necesidades}
                                                                                    alt="necesidades althacare"
                                                                                    width={371}
                                                                                    height={332}
                                                                                />
                                                                            </p>
                                                                            <h4>
                                                                                <span
                                                                                    className="fontstyle0"
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        color: "#68c8c8",
                                                                                        fontSize: 24
                                                                                    }}
                                                                                >
                                                                                    Entendemos
                                                                                    <br />
                                                                                    tus necesidades
                                                                                </span>
                                                                            </h4>
                                                                            <p
                                                                                className="parrafosresponsivos"
                                                                                style={{
                                                                                    textAlign: "justify",
                                                                                    color: "#797979",
                                                                                    textAlignLast: "center"
                                                                                }}
                                                                            >
                                                                                <strong
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        color: "#d63440"
                                                                                    }}
                                                                                >
                                                                                    althacare<sup>®</sup>
                                                                                </strong>
                                                                                es un servicio boutique diseñado
                                                                                específicamente para un solo servicio: venta
                                                                                de medicamentos difícil acceso, no disponibles
                                                                                en México. Nuestra misión es facilitar el
                                                                                acceso
                                                                                <br /> al paciente a la mejor medicina del
                                                                                <br /> mundo al mejor costo posible.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="vc_column-inner vc_custom_1552418578983">
                                                                <div className="wpb_wrapper">
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp serviciosalthacare service1althacare wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p>
                                                                                <img
                                                                                    className="img-fluid"
                                                                                    src={Logistica}
                                                                                    alt="losgistica althacare"
                                                                                    width={371}
                                                                                    height={332}
                                                                                />
                                                                            </p>
                                                                            <h4>
                                                                                <span
                                                                                    className="fontstyle0"
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        color: "#68c8c8",
                                                                                        fontSize: 24
                                                                                    }}
                                                                                >
                                                                                    Logística
                                                                                    <br />
                                                                                    internacional{" "}
                                                                                </span>
                                                                            </h4>
                                                                            <p
                                                                                className="parrafosresponsivos"
                                                                                style={{
                                                                                    textAlign: "justify",
                                                                                    color: "#797979",
                                                                                    textAlignLast: "center"
                                                                                }}
                                                                            >
                                                                                Nuestra experiencia abarca las gestiones en
                                                                                todos los frentes logísticos tales como,
                                                                                regulatorios, aduanales, fiscales,
                                                                                administrativos y de transporte, incluyendo,
                                                                                la entrega de productos que requieren red fría
                                                                                o un manejo especial de almacenamiento y
                                                                                entrega. También contamos con una amplia red
                                                                                de proveedores y asociados de servicios
                                                                                estratégicos en el extranjero. Hemos
                                                                                desarrollado una metodología orientada a un
                                                                                volumen de clientes selectos con soluciones
                                                                                <br /> a la medida las cuales abordamos
                                                                                <br />
                                                                                caso-por-caso.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="vc_column-inner vc_custom_1552418586487">
                                                                <div className="wpb_wrapper">
                                                                    <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight serviciosalthacare service3althacare wpb_start_animation animated">
                                                                        <div className="wpb_wrapper">
                                                                            <p>
                                                                                <img
                                                                                    className="aligncenter img-fluid"
                                                                                    src={Hospitales}
                                                                                    alt="hospitales althacare"
                                                                                    width={371}
                                                                                    height={332}
                                                                                />
                                                                            </p>
                                                                            <h4>
                                                                                <span
                                                                                    className="fontstyle0"
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        color: "#68c8c8",
                                                                                        fontSize: 24
                                                                                    }}
                                                                                >
                                                                                    Instituciones
                                                                                </span>
                                                                            </h4>
                                                                            <p
                                                                                className="parrafosresponsivos"
                                                                                style={{
                                                                                    textAlign: "justify",
                                                                                    color: "#797979",
                                                                                    textAlignLast: "center"
                                                                                }}
                                                                            >
                                                                                Los beneficios de contar con{" "}
                                                                                <strong
                                                                                    style={{
                                                                                        fontFamily: '"Roboto Slab"',
                                                                                        color: "#d63440"
                                                                                    }}
                                                                                >
                                                                                    althacare<sup>®</sup>
                                                                                </strong>
                                                                                como socio comercial, es que una gran cantidad
                                                                                de medicamentos siguen directamente
                                                                                relacionados con servicios hospitalarios y su
                                                                                infraestructura, principalmente en aquellos
                                                                                que son de « uso exclusivo hospitalario », los
                                                                                cuales por lo general requieren una
                                                                                tramitología regulatoria y fiscal especial, y
                                                                                por lo tanto trabajamos de la mano paso a paso
                                                                                con los responsables de las áreas de compras o
                                                                                con quien corresponda, para coordinar la
                                                                                programación y entrega (dentro o fuera
                                                                                <br /> del hospital) de cada tratamiento
                                                                                <br /> médico de importación.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="vc_row-full-width vc_clearfix" />
                                                    <div className="vc_row-full-width-before" />
                                                    <div
                                                        id="vc_row-60de2a4fc53a6"
                                                        data-vc-full-width="true"
                                                        data-vc-full-width-init="true"
                                                        style={{
                                                            backgroundImage: `url(${ContactoColor})`,
                                                            backgroundPosition: "center !important",
                                                            backgroundRepeat: "no-repeat !important",
                                                            backgroundSize: "cover !important"
                                                        }}
                                                        className="row mb-4"
                                                    >
                                                        <div className="col-sm-5 col-lg-4 col-md-4 col-xs-12">
                                                            <div className>
                                                                <h2
                                                                    style={{
                                                                        textAlign: "left",
                                                                        textTransform: "none"
                                                                    }}
                                                                >
                                                                    <span style={{ color: "#ffffff" }}>
                                                                        Acceso a medicamentos
                                                                        <br /> que salvan vidas
                                                                    </span>
                                                                </h2>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="vc_column-inner ">
                                                                <div className="wpb_wrapper">
                                                                    <div >
                                                                        <div className="wpb_wrapper">
                                                                            <p
                                                                                style={{
                                                                                    textAlign: "justify",
                                                                                    fontSize: 17,
                                                                                    lineHeight: "1.4"
                                                                                }}
                                                                            >
                                                                                <span style={{ color: "#ffffff" }}>
                                                                                    <strong>Contacto</strong>
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div >
                                                                        <div className="wpb_wrapper">
                                                                            <p className="mb-2">
                                                                                <Link
                                                                                    className="linksinfocontacto"
                                                                                    style={{ color: "#ffffff" }}
                                                                                    to="mailto:rx@althacare.com"
                                                                                >
                                                                                    rx@althacare.com
                                                                                </Link>
                                                                            </p>
                                                                            <p className="mb-2">
                                                                                <Link
                                                                                    className="linksinfocontacto"
                                                                                    style={{ color: "#ffffff" }}
                                                                                    to="tel:+528117667724"
                                                                                >
                                                                                    +52 (81) 17-66-77-24
                                                                                </Link>

                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </article>
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
}
