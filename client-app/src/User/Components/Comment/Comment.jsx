import "./Comment.css"
const Commnent = () => {
    return ( 
        <>
        <section className="content-item" id="comments">
  <div className="container">   
    <div className="row">
      <div className="col-sm-8">   
        <form>
          <h3 className="pull-left">Bình luận của bạn</h3>
          <fieldset>
            <div className="row">
             
              <div className="form-group col-sm-12 col-lg-12">
                <textarea className="form-control" id="message" placeholder="Your message" required defaultValue={""} />
                <button type="submit" className="btn btn-success pull-right">Submit</button>
              </div>
            </div>  	
          </fieldset>
        </form>
        {/* <h3>4 Comments</h3> */}
        {/* COMMENT 4 - START */}
        <div className="media">
          {/* <a className="pull-left" href="#"><img className="media-object" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt /></a> */}
          <div className="media-body">
            <h4 className="media-heading">John Doe</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className="list-unstyled list-inline media-detail pull-left">
              <li><i className="fa fa-calendar" />27/02/2014</li>
            </ul>
            <ul className="list-unstyled list-inline media-detail pull-right">
              <li className><a href>Reply</a></li>
            </ul>
          </div>
        </div>
        {/* COMMENT 4 - END */}
      </div>
    </div>
  </div>
</section>


        </>
     );
}
 
export default Commnent;