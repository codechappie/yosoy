import { Layout } from '../../../components/Layout';
import style from './User.module.scss'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
const index = ({ props }: any) => {
    let { username } = props;
    let title = `YosoY - ${username}`
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="YoSoY es una página en la que podrás crear una curriculim online." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={style.container__fluid}>
                <section className={style.main__information}>
                    <div className={style.main__information_container}>
                        <div className={style.header}>
                            <div className={style.presentacion}>
                                <h1>Hola, Yo soy</h1>
                                <h1>{username}</h1>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores fuga totam, odio <a
                                        className={style.underlined} href="#">laboreullam</a>  fugiat
                                    laborum saepe consequuntur <a className={style.underlined} href="#">consequatur</a> quaerat pariatur
                                    voluptate quibusdam dolorem
                                    assumenda aperiam
                                    quo <a className={style.underlined} href="#">impeditds</a> eaque iusto!
                                </p>
                            </div>
                            <div className={style.navigation__menu}>
                                <a href="#">
                                    <div className={style.number}><span>0</span> <span>1</span></div>
                                    <span className={style.line_separation}></span>
                                    <h4 className={style.title_menu}>Proyectos</h4>
                                </a>
                                <a href="#">
                                    <div className={style.number}><span>0</span> <span>2</span></div>
                                    <span className={style.line_separation}></span>
                                    <h4 className={style.title_menu}>Otros enlaces</h4>
                                </a>
                                <a href="#">
                                    <div className={style.number}><span>0</span> <span>3</span></div>
                                    <span className={style.line_separation}></span>
                                    <h4 className={style.title_menu}>Artículos</h4>
                                </a>
                            </div>
                        </div>
                        <div className={style.footer}>
                            <div className={style.find__me}>
                                <div className={style.profile__image}>
                                    <div className={style.profile__image}>
                                        <Image className={style.img} src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                            alt="" fill />
                                    </div>
                                </div>
                                <Link href="https://codechappie.com" className={style.social__link}>
                                    <div className={style.img}>
                                        <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_github_4.svg" alt=""
                                            fill />
                                    </div>
                                    <div className={style.title__social__link}>Twitter</div>
                                    <div className={style.img_link}>
                                        <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_external_link_1.svg" alt=""
                                            fill />
                                    </div>
                                </Link>
                                <Link href="https://codechappie.com" className={style.social__link}>
                                    <div className={style.img}>
                                        <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_twitter_squared_1.svg" alt=""
                                            fill />
                                    </div>
                                    <div className={style.title__social__link}>GitHub</div>
                                    <div className={style.img_link}>
                                        <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_external_link_1.svg" alt=""
                                            fill />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={style.secondary__information}>
                    <div className={style.container}>
                        <section className={style.projects}>
                            <h3>Proyectos</h3>
                            <div className={style.projects__container}>
                                <a className={style.project__card}>
                                    <small>JAVASCRIPT</small>
                                    <h4>Hero.js</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempora blanditiis ab
                                        dolorem! Inventore commodi veniam.</p>
                                    <div className={style.stars}>
                                        <div className={style.img}>
                                            <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_star.svg" alt="" fill />
                                        </div>
                                        <small>322</small>
                                    </div>
                                </a>
                                <a className={style.project__card}>
                                    <small>JAVASCRIPT</small>
                                    <h4>President.js</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempora blanditiis ab
                                        dolorem! Inventore commodi veniam.</p>
                                    <div className={style.stars}>
                                        <div className={style.img}>
                                            <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_star.svg" alt="" fill />
                                        </div>
                                        <small>52</small>
                                    </div>
                                </a>
                            </div>
                        </section>
                        <section className={style.other__links}>
                            <h3>Otros enlaces</h3>
                            <div className={style.other__links__container}>
                                <div className={style.other__links__card}>
                                    <div className={style.header}>
                                        <h6>Mini título</h6>
                                        <small>Online</small>
                                        <small>26 de Mayo 2020</small>
                                    </div>

                                    <div className={style.footer}>
                                        <h4>Lorem ipsum dolor sit.</h4>
                                        <div className={style.social__links}>
                                            <div className={style.title__social__link}>Twitter</div>
                                            <div className={style.img}>
                                                <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_external_link_1.svg" alt=""
                                                    fill />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.other__links__card}>
                                    <div className={style.header}>
                                        <h6>Mini título</h6>
                                        <small>Online</small>
                                        <small>26 de Mayo 2020</small>
                                    </div>

                                    <div className={style.footer}>
                                        <h4>Lorem ipsum dolor sit.</h4>
                                        <div className={style.social__links}>
                                            <div className={style.title__social__link}>Twitter</div>
                                            <div className={style.img}>
                                                <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_external_link_1.svg" alt="" fill />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.other__links__card}>
                                    <div className={style.header}>
                                        <h6>Mini título</h6>
                                        <small>Online</small>
                                        <small>26 de Mayo 2020</small>
                                    </div>

                                    <div className={style.footer}>
                                        <h4>Lorem ipsum dolor sit.</h4>
                                        <div className={style.social__links}>
                                            <div className={style.title__social__link}>Facebook</div>
                                            <div className={style.img}>
                                                <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_external_link_1.svg" alt="" fill />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.other__links__card}>
                                    <div className={style.header}>
                                        <h6>Mini título</h6>
                                        <small>Online</small>
                                        <small>26 de Mayo 2020</small>
                                    </div>

                                    <div className={style.footer}>
                                        <h4>Lorem ipsum dolor sit sadsa asdasd asdasd.</h4>
                                        <div className={style.social__links}>
                                            <div className={style.title__social__link}>Facebook</div>
                                            <div className={style.img}>
                                                <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_external_link_1.svg" alt="" fill />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section >
                        <section className={style.audiovisual__content}>
                            <h3>Audiovisual</h3>
                            <div className={style.audiovisual__content__container}>
                                <div className={style.audiovisual__card}>
                                    <div className={style.big__button}>
                                        <div className={style.img}>
                                            <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_play.svg" alt="" fill />
                                        </div>
                                    </div>
                                    <div className={style.detail__card}>
                                        <h4>Lorem ipsum dolor sitlasw.</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <small>26 de Mayo 2020</small>
                                    </div>
                                </div>
                                <div className={style.audiovisual__card}>
                                    <div className={style.big__button}>
                                        <div className={style.img}>
                                            <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_medium_volume.svg" alt="" fill />
                                        </div>
                                    </div>
                                    <div className={style.detail__card}>
                                        <h4>Lorem ipsum dolor si sdfskjflksnsd sdfsd tlasw.</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur lorem sds sadipisicing elit.</p>
                                        <small>26 de Mayo 2020</small>
                                    </div>
                                </div>
                                <div className={style.audiovisual__card}>
                                    <div className={style.big__button}>
                                        <div className={style.img}>
                                            <Image src="https://codechappie.github.io/blackandwhite/assets/icons/icons8_medium_volume.svg" alt="" fill />
                                        </div>
                                    </div>
                                    <div className={style.detail__card}>
                                        <h4>Lorem ipsum dolor sitlasw.</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <small>26 de Mayo 2020</small>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div >
                </section >
            </main >
        </>
    )
}


export async function getServerSideProps(context: any) {
    let { id } = context.params;
    let booleanVal = true;
    if (booleanVal) {

        return {
            props: { props: { username: id } },
        };
    } else {
        return { props: {} };
    }

}
export default index