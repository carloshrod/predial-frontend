import { Loader, Message, PropertyDetails } from '../components/minors';
import { usePropertiesContext } from '../context/PropertiesContext';

function MyProperties() {
    const { associatedProperties, loading, error, msgError } = usePropertiesContext();

    if (loading) return <Loader />;
    if (error) return <Message msg={msgError} bgColor="#dc3545" />;

    return (
        <>
            {
                associatedProperties.length > 0
                    ?
                    <>
                        {associatedProperties.map((property) => (
                            <PropertyDetails key={property._id} property={property} />
                        ))}
                    </>
                    :
                    <>
                        <div className="card mt-4">
                            <h1 className="text-center text-xl my-5">¡No tienes predios asociados a tu cuenta!</h1>
                        </div>
                    </>
            }
        </>
    )
}

export default MyProperties;
