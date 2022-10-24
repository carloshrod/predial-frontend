import { FormSearch } from '../components/forms';
import { PropertyDetails, Loader, Message } from '../components/minors';
import { usePropertiesContext } from '../context/PropertiesContext';

function AssociateProperties() {
    const { foundProperties, propertiesError, propertiesErrorMsg, isLoading } = usePropertiesContext();

    return (
        <>
            <FormSearch />
            {isLoading && <Loader />}
            {(foundProperties.length === 0 && propertiesError) && <Message msg={propertiesErrorMsg} bgColor="#dc3545" />}
            {foundProperties.map((property) => (
                <PropertyDetails
                    key={property._id}
                    property={property}
                />
            ))}
        </>
    )
}

export default AssociateProperties;
