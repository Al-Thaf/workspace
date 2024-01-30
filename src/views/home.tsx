import { useEffect, useState } from 'react';
import './styles.css'
import Card from '../components/card';
import { BrandProps } from './types';

const Home: React.FC = () => {
    const [data, setData] = useState<BrandProps[]>([])
    const [formOpen, SetFormOpen] = useState<BrandProps | null>(null)

    const handleClick = (data: BrandProps) => {
        console.log(data)
        SetFormOpen(data)

    }

    const fetchData = async () => {
        try {
            const response = await fetch('/src/brand.json');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching JSON data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='a'>


                <div className='content'>
                    {data.map((d, i) => (
                        <Card content={d.brand} key={i} onClick={() => handleClick(d)} />
                    ))}
                </div>
                {formOpen && (
                    <div className='form'>
                        open
                    </div>
                )}
            </div>
        </>
    )
}

export default Home;