import React from 'react';

type NewComponentType = {
    students: StudentType[]

}

type StudentType = {
    id: number
    name: string
    age: number
}

type TopCatsType = {
    manufacturer: string
    model: string
}


const NewComponent = (props: NewComponentType) => {

    const topCars = (props: TopCatsType) => [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            {/*<ul>*/}
            {/*    {props.students.map((objectFromStudentArray, index) => {*/}
            {/*        return (*/}
            {/*            <li key={objectFromStudentArray.id}>*/}
            {/*                <span>{objectFromStudentArray.name}</span>*/}
            {/*                <span> age : {objectFromStudentArray.age}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </div>
    );
};

export default NewComponent;