/*function formValidation(booking)
{
    alert(document.booking.name);
    return true;

var name = document.booking.name;
var city = document.booking.city;
var email = document.booking.email;
var password = document.booking.password;
var address = document.booking.address;
var no_of_people = document.booking.no_of_people;
var type_of_room = document.booking.type_of_room;
var check_in_date = document.booking.check_in_date;
var check_out_date = document.booking.check_out_date;
var gridCheck=document.booking.gridCheck;

console.log(name);

                <div class="container">
                    <div class="row">
                        <div class="carousel-caption booking col-xs-6">
                            <h3>Book Your Room</h3>
                            <form name="booking" onsubmit="return formValidation(this)">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="name">Name</label>
                                        <input type="text" name="name" class="form-control" id="name">
                                      </div>
                                      <div class="form-group col-md-6">
                                        <label for="city">City</label>
                                        <input type="text" name="city" class="form-control" id="city">
                                      </div>
                                  <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" class="form-control" id="email">
                                  </div>
                                  <div class="form-group col-md-6">
                                    <label for="password">Password</label>
                                    <input type="password" name="password" class="form-control" id="password">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label for="address">Address</label>
                                  <input type="text" name="address" class="form-control" id="address">
                                </div>
                                <div class="form-row">
                                  <!--<div class="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity">
                                  </div>-->
                                  <div class="form-group col-md-4">
                                    <label for="no_of_people">No. of People</label>
                                    <select id="no_of_people" name="no_of_people" class="form-control">
                                      <option selected>Choose...</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                    </select>
                                  </div>
                                  <div class="form-group col-md-4">
                                    <label for="type_of_room">Type of Room</label>
                                    <select id="type_of_room" name="type_of_room" class="form-control">
                                      <option selected>Choose...</option>
                                      <option value="Deluxe">Deluxe</option>
                                      <option value="Premium">Premuim</option>
                                      <option value="Villas">Villas</option>
                                      <option value="Private Plunge Pool">Private Plunge Pool</option>
                                      <option value="AC">AC</option>
                                      <option valu="NonAC">NonAC</option>
                                    </select>
                                  </div>
                                  <!--<div class="form-group col-md-4">
                                    <label for="inputState">No. of People</label>
                                    <select id="inputState" class="form-control">
                                      <option selected>Choose...</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                    </select>
                                  </div>
                                  --<div class="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip">
                                  </div>-->
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="check_in_date">Check-In</label>
                                        <input type="date" name="check_in_date" class="form-control" id="check_in_date">
                                      </div>
                                      <div class="form-group col-md-6">
                                        <label for="check_out_date">Check-Out</label>
                                        <input type="date" name="check_out_date" class="form-control" id="check_out_date">
                                      </div>
                                </div>

                                <div class="form-group">
                                  <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" name="gridCheck" value="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                      I agree to the terms and conditions
                                    </label>
                                  </div>
                                </div>
                                <button type="submit" name="submit" value="submit" id="submit" class="btn btn-primary p-3 BookBtn">Book</button>
                              </form>


                        </div>
                    </div>
                </div>








                                            <form name="booking" onsubmit="return formValidation(this)">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="name">Name</label>
                                        <input type="text" name="name" class="form-control" id="name">
                                      </div>
                                      <div class="form-group col-md-6">
                                        <label for="city">City</label>
                                        <input type="text" name="city" class="form-control" id="city">
                                      </div>
                                  <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" class="form-control" id="email">
                                  </div>
                                  <div class="form-group col-md-6">
                                    <label for="password">Password</label>
                                    <input type="password" name="password" class="form-control" id="password">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <label for="address">Address</label>
                                  <input type="text" name="address" class="form-control" id="address">
                                </div>
                                <div class="form-row">
                                  <!--<div class="form-group col-md-6">
                                    <label for="inputCity">City</label>
                                    <input type="text" class="form-control" id="inputCity">
                                  </div>-->
                                  <div class="form-group col-md-4">
                                    <label for="no_of_people">No. of People</label>
                                    <select id="no_of_people" name="no_of_people" class="form-control">
                                      <option selected>Choose...</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                    </select>
                                  </div>
                                  <div class="form-group col-md-4">
                                    <label for="type_of_room">Type of Room</label>
                                    <select id="type_of_room" name="type_of_room" class="form-control">
                                      <option selected>Choose...</option>
                                      <option value="Deluxe">Deluxe</option>
                                      <option value="Premium">Premuim</option>
                                      <option value="Villas">Villas</option>
                                      <option value="Private Plunge Pool">Private Plunge Pool</option>
                                      <option value="AC">AC</option>
                                      <option valu="NonAC">NonAC</option>
                                    </select>
                                  </div>
                                  <!--<div class="form-group col-md-4">
                                    <label for="inputState">No. of People</label>
                                    <select id="inputState" class="form-control">
                                      <option selected>Choose...</option>
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                    </select>
                                  </div>
                                  --<div class="form-group col-md-2">
                                    <label for="inputZip">Zip</label>
                                    <input type="text" class="form-control" id="inputZip">
                                  </div>-->
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="check_in_date">Check-In</label>
                                        <input type="date" name="check_in_date" class="form-control" id="check_in_date">
                                      </div>
                                      <div class="form-group col-md-6">
                                        <label for="check_out_date">Check-Out</label>
                                        <input type="date" name="check_out_date" class="form-control" id="check_out_date">
                                      </div>
                                </div>

                                <div class="form-group">
                                  <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" name="gridCheck" value="gridCheck">
                                    <label class="form-check-label" for="gridCheck">
                                      I agree to the terms and conditions
                                    </label>
                                  </div>
                                </div>
                                <button type="submit" name="submit" value="submit" id="submit" class="btn btn-primary p-3 BookBtn">Book</button>
                              </form>















                              <form name="booking" onsubmit="return formValidation(this)">
                              <div class="name-city">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name">
                                <label for="city">City</label>
                                <input type="text" name="city" id="city">
                              </div>
                              <div>
                                <label for="email">Email</label>
                                <input type="text" name="email" id="email">
                                <label for="password">Password</label>
                                <input type="text" name="password" id="password">
                              </div>
                              

                             
                              <input type="submit" value="submit">
                            </form>
}*/
