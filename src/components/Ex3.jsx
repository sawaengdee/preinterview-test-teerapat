import React from 'react'

const Arrays = [
    ['Cat', 'Dog', 'Bird'],
    ['Cat', 'Bat', 'Dog', 'Bird'],
    ['Cat', 'Dog', 'Ant', 'Cat']
];

const Ex3 = () => {
    const [search, setSearch] = React.useState(['', '', '']);
    const [result, setResult] = React.useState([[], [], []]);

    React.useEffect(() => {
        (() => {
            return null;
        })()
    }, [result, search]);

    const handleChange = (event, index) => {
        let h_search = search;
        h_search[index] = event.target.value;

        setSearch([...h_search]);

        let tar = Arrays.at(index);

        let h_results = result;
        console.log(h_results[index], h_search[index]);
        h_results[index] = [...new Set(tar)].filter((str) => {
            return h_search[index].toLowerCase() !== '' && str.toLowerCase().includes(h_search[index].toLowerCase())
        });
        console.log(result[index], h_results[index], h_search[index], [...new Set(tar)]);

        setResult([...h_results]);
    };

    return (
        <div>
            <h1>ข้อที่3 : </h1>
            <table>
                <thead>

                    <tr>
                        <th>Array</th>
                        <th>Input</th>
                        <th>Result</th>
                    </tr>
                </thead>

                <tbody>
                    {Arrays.map((group, r_index) => (
                        <tr key={`tr-${r_index}`}>
                            <td>
                                {group.map((name, g_index) => (
                                    <span key={g_index}>{name} </span>
                                ))}
                            </td>
                            <td>
                                <input type="text" onChange={(e) => handleChange(e, r_index)} />
                            </td>
                            <td>
                                <Result data={result[r_index]} search={search[r_index]} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const Result = (props) => {
    const data = props.data;
    const search = props.search;

    if (data.length > 0) {
        return (
            <div>
                {data.join(', ')}
                <br />
                {data.map((name) => {
                    return (name.toLowerCase().indexOf(search.toLowerCase()));
                }).join(', ')}
            </div>
        );
    } else {
        return (<>no result found.</>)
    }
}

export default Ex3