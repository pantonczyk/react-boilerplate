import React from 'react';
import { useParams } from 'react-router-dom';
import { object } from 'prop-types';

const ApplicationOverviewDetails = ({ applicationStructure }) => {
    const { chapterID, sectionID } = useParams();

    const chapter = applicationStructure.chapterSet.find((chapter) => chapter.id === chapterID);
    const chapterOrder = chapter.order;
    const section = chapter.sectionSet.find((section) => section.id === sectionID);
    const sectionOrder = section.order;
    const sectionName = section.name;

    return (
        <h1>
            {chapterOrder}.{sectionOrder}. {sectionName}
        </h1>
    );
};

ApplicationOverviewDetails.propTypes = {
    applicationStructure: object,
};

export default ApplicationOverviewDetails;
