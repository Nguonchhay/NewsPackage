import DefaultLayout from '../layouts/Default';

const News = props => {
    return (
        <DefaultLayout>
            <div className="container-fluid pt-3">
                <div className="container animate-box" data-animate-effect="fadeIn">
                    News list
                </div>
            </div>
        </DefaultLayout>
    )
}

export default News;