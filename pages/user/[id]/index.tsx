import style from './User.module.scss'
const index = ({ props }: any) => {
    console.log(props)
    return (
        <h2 className={style.re}>Prueba</h2>
    )
}


export async function getServerSideProps(context: any) {
    let { id } = context.params;
    console.log(id)
    let booleanVal = true;
    if (booleanVal) {

        return {
            props: { props: {id: "aa"} }, 
        };
    } else {
        return { props: {} };
    }

}
export default index