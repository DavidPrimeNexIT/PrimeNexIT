// src/pages/index.js
export async function getServerSideProps() {
// Lógica para obtener los datos desde una API o base de datos
const res = await fetch('https://api.example.com/data');
const data = await res.json();

// Retornar los datos como props
return { props: { data } };
}

export default function Home({ data }) {
return (
    <div>
    <h1>Server-Side Rendered Page</h1>
    <ul>
        {data.map(item => (
        <li key={item.id}>{item.name}</li>
        ))}
    </ul>
    </div>
);
}
