import React from 'react';
import PropTypes from 'prop-types';

import BlogCard from './blogCard';

export default function PillarCardList({ list }) {
    return (
        <div>
            {list.map((post) => {
                return <BlogCard data={post} />;
            })}
        </div>
    );
}

PillarCardList.propTypes = {
    list: PropTypes.array.isRequired,
};
