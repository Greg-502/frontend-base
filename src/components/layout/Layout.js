import Navegation from '../Navegation'

export default function Layout({ children }) {
    return (
        <div>
            <>
                <Navegation/>
                { children }
            </>
        </div>
    )
}
