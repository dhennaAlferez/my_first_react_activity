import '../Styles/main.css';
const Main = () => {

const handleNameChanges = () => {
    const names = ['Dhenna', 'John', 'Jeff', 'Bea'];
    const num = Math.floor(Math.random() * 4);
    return names[num];
}

    return (

        <Main>
<p>
    HELLO {handleNameChanges}
</p>
        </Main>
    )
}

export default Main;