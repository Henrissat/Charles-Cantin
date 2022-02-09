import styled from "styled-components";
import "./galery.css";

const ImgsGalery = [
    {author:"Pierre", tag:"Famille", src:"https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Paul", tag:"couple", src:"https://images.pexels.com/photos/6954439/pexels-photo-6954439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {author:"Jacques", tag:"portrait", src:"https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Martine", tag:"Grossesse", src:"https://images.pexels.com/photos/2316856/pexels-photo-2316856.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Jhon", tag:"Mariage", src:"https://images.pexels.com/photos/3014937/pexels-photo-3014937.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Caroline", tag:"Bébé", src:"https://images.pexels.com/photos/266004/pexels-photo-266004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Jacques", tag:"portrait", src:"https://images.pexels.com/photos/1171980/pexels-photo-1171980.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Martine", tag:"Famille", src:"https://images.pexels.com/photos/1914984/pexels-photo-1914984.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Paul", tag:"Mariage", src:"https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Jhon", tag:"Grossesse", src:"https://images.pexels.com/photos/3369464/pexels-photo-3369464.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
    {author:"Pierre", tag:"Bébé", src:"https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Jacques", tag:"portrait", src:"https://images.pexels.com/photos/6895533/pexels-photo-6895533.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
    {author:"Martine", tag:"Mariage", src:"https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Pierre", tag:"couple", src:"https://images.pexels.com/photos/3692738/pexels-photo-3692738.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Caroline", tag:"Grossesse", src:"https://images.pexels.com/photos/3115516/pexels-photo-3115516.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Jhon", tag:"Bapteme", src:"https://images.pexels.com/photos/10630087/pexels-photo-10630087.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Jacques", tag:"Famille", src:"https://images.pexels.com/photos/1320701/pexels-photo-1320701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Paul", tag:"couple", src:"https://images.pexels.com/photos/412295/pexels-photo-412295.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Martine", tag:"Famille", src:"https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Jhon", tag:"Grossesse", src:"https://images.pexels.com/photos/2994027/pexels-photo-2994027.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Caroline", tag:"Bébé", src:"https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Pierre", tag:"Bapteme", src:"https://images.pexels.com/photos/6263079/pexels-photo-6263079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {author:"Martine", tag:"Grossesse", src:"https://images.pexels.com/photos/590496/pexels-photo-590496.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Paul", tag:"portrait", src:"https://images.pexels.com/photos/6934325/pexels-photo-6934325.png?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Caroline", tag:"Bébé", src:"https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Jacques", tag:"Mariage", src:"https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Jhon", tag:"Bapteme", src:"https://images.pexels.com/photos/10634779/pexels-photo-10634779.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
    {author:"Pierre", tag:"Bébé", src:"https://images.pexels.com/photos/50692/brothers-family-siblings-boys-50692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {author:"Martine", tag:"Bapteme", src:"https://images.pexels.com/photos/10629783/pexels-photo-10629783.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
];

const filters = [
    {name:"Mariage", status:false},
    {name:"Couple", status:false},
    {name:"Portrait", status:false},
    {name:"Grossesse", status:false},
    {name:"Bébé", status:false},
    {name:"Famille", status:false},
    {name:"Bapteme", status:false}
];

const Filters = ({onClickAll, all, onClick, filters}) =>
    <form>
        <ul>
            <li onClick={onClickAll}>
                <input 
                type="checkbox"
                checked={all}
            />
                <label htmlFor="all">All</label>
            </li>
            {filters.map((filter, i) =>
                <li  key={i} data-index={i} onClick={onClick} >
                    <input id={filter.name} type="checkbox" checked={filter.status}/>
                    <label htmlFor={filter.name}>{filter.name}</label>
                </li>
            )}
        </ul>
    </form>

/*
const Cards = () => 

const Filters = () =>
    <p>Salut tout le monde</p>
*/

export default function Galery() {

    return(
        <Wrapper>
            <h2>Gallerie</h2>
            <Filters />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-top: 75px;
`;