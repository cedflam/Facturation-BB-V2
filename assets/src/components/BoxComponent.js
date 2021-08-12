import React, {Fragment} from 'react';
import LoaderComponent from "./LoaderComponent";

const BoxComponent = ({title, number, link, logo, color, isLoading}) => {

    return (
        <Fragment>
            <div className="col-md-4">
                <div className="card border-0  mt-3" id="">
                    <div className={`card-body  text-white rounded-top bg-${color}`} >
                        <div className="row">
                            <div className="ml-3">
                                <h1 className="font-weight-bold">
                                    {!isLoading ? number : <LoaderComponent/> }
                                </h1>
                                <p>{title}</p>
                            </div>
                            <h1 className=" display-4 ml-auto mr-3">
                                {logo}
                            </h1>
                        </div>
                    </div>
                    <div className={`card-footer bg-primary rounded-bottom bg-${color}`} >
                        <a href="" className="text-white text-center">
                            {link}
                            <i className="fas fa-arrow-circle-right ml-2"> </i>
                        </a>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default BoxComponent;
