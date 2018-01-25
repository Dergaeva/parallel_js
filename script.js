function Parallel() {

  /*
  * создаем пустой массив
  * добавляем задачу в очередь
  * done - resolve
  * с помощью while перебираем массив с результатами
  *
  *
  * */

  // this.done = function (done) {
  //   this.done = done;
  //   return this;
  // };


  this.job = function (data) {
    // let arr = [];
    // this.step += arr.push(step);
    // return arr;
    var size = this._size++;
    this._storage[size] = data;
  };

}

/**/

var runner = new Parallel({
  parallelJobs: 4 //количество запусков
});

runner
  .job(step1)
  .job(step2)
  .job(step3)
  .job(step4)
  .done(onDone);

//Result: ['hello world', 'Job succeded', 'step3', 'step4'];

function step1(done) {
  console.log('step1');
  setTimeout(done, 1000, 'hello world');
}

function step2(done) {
  console.log('step2');
  setTimeout(done, 1200, 'Job succeded');
}

function step3(done) {
  console.log('step3');
  setTimeout(done, 1500, 'step3');
}

function step4(done) {
  console.log('step4');
  setTimeout(done, 100, 'step4');
}

var isPassed = false;
function onDone(results) {
  console.log('onDone', results);
  console.assert(Array.isArray(results), 'expect result to be array');
  console.assert(results[0] === 'hello world', 'Wrong answer 1');
  console.assert(results[1] === 'Job succeded', 'Wrong answer 2');
  console.assert(results[2] === 'step3', 'Wrong answer 3');
  console.assert(results[3] === 'step4', 'Wrong answer 4');
  console.log('Thanks, all works fine');
  isPassed = true;
}

setTimeout(function(){
  if(isPassed) return;
  console.error('Test is not done.');
}, 3500);
