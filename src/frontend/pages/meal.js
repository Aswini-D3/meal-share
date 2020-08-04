

function showSingleMeal(meals){
console.log(meals);
  
  return meals.map((meal) => {
    return`
    <img src="/images/${meal.title}.jpg" alt="Book Reservation" />
    <button class="btn link-button" href="meals" data-navigo>Available Reservations</button>
    </div>
    <div class="content-wrapper">
    <h4>${meal.id}.${meal.title}</h4><br>
    <p>${meal.description}<br><br>Created Date:${meal.created_date}<br><br>Location:${meal.location}<br><br>Price:${meal.price}</p>
    <div class="web-form">
    <form action="../../api/reservations" method="post">
            
            <!---<div class="form-group">
                <label>meal_id</label>
                <input class="form-control" type="number" name="meal_id" value = "${meal.id}" />
              </div>
              <div class="form-group">
                  <label>created_date</label>
                  <input class="form-control" type="text" name="created_date" value = "${meal.created_date}"/>
                  </div>
                  <div class="form-group">
                  <label>location</label>
                  <input class="form-control" type="text" name="location" value= "${meal.location}"/>
                  
                </div>--->`
   });
  }
window.handleMealRequest = async (params) => {
  const oneMealResponse = await fetch(`/api/meals/${params.id}`);
  const oneMeal = await oneMealResponse.json();
  document.body.innerHTML = `
  <div class="page-section">
  <!-- page header -->
  <header>
    <div class="container">
      <div class="header-group">
        <div class="logo">
          <a><span>Indo</span> Meal</span></a>
        </div>
        <nav class="navbar navbar-expand-md">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler"
            aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            &#9776;
          </button>
          <!--<div class="collapse navbar-collapse" id="navbarToggler">
            <ul>
              <li>
                <a href="/" data-navigo>Home</a>
              </li>
              <li>
                <a  href="meals" data-navigo>Meals</a>
              </li>
              <li>
                <a href="reservations" data-navigo>Reservations</a>
              </li>
              <li>
                <a href="reviews" data-navigo>Reviews</a>
              </li>
            </ul>
          </div>-->
        </nav>
      </div>
    </div>
  </header>

  <!--page banner
  <div class="page-banner">
  <div class="background" style="background-image: url(images/home-banner3.jpg);"></div>
  <div class="container">
      <div class="banner-content">
        <h1>Flavors of Indian Food</h1>
        <p>Indian food is different from rest of the world not only in taste but also in cooking methods. It reflects a perfect blend of various cultures and ages. Just like Indian culture, food in India has also been influenced by various civilizations, which have contributed their share in its overall development and the present form.</p>
      </div>
    </div>
  </div>-->

  <!-- page contetnt -->
  <div class="page-content">
    <div class="container">
      <!-- Our Reservation -->
      <section class="product-details">
        <!--<h2>Reservation</h2>-->
        <div class="product-content">
          <div class="image-wrapper">
            <!--<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Bookatable_Logo.png/300px-Bookatable_Logo.png" alt="Book Reservation" />
            <button class="btn link-button" href="meals" data-navigo>Available Reservations</button>

          </div>
          <div class="content-wrapper">-->
          ${showSingleMeal(oneMeal)}
              <div class="form-group">
                <label>name</label>
                <input class="form-control" type="text" name="name" placeholder="Enter name" />
              </div>
              
              <div class="form-group">
                <label>Email</label>
                <input class="form-control" type="email" name="Email" placeholder="example@gmail.com" />
              </div>
              <div class="form-group">
                <label>Phone</label>
                <input class="form-control" type="tel" name="Phone" placeholder="0045-12345678" />
              </div>
              <div class="form-group">
                  <label>number_of_guests</label>
                  <input class="form-control" type="number" name="number_of_guests" min="1" max="20" placeholder="choose number from a list" />
                </div>
                <!---<div class="form-group">
                  <label>created_date</label>
                  <input class="form-control" type="text" name="created_date" placeholder="yyyy-mm-dd"/>
                  
                </div>--->
              <div class="form-group">
                <button class="btn btn-primary">Submit</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- page footer -->
  <footer>
    <div class="container">
      <p>&copy; 2020 Indo Meal@Aswini Gundreddy.</p>
    </div>
  </footer>

</div>`



}

  

