export { useTitle } from "./title.hook";

const createPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 10);
      if (num < 5) {
        resolve("Okay");
      } else {
        reject("Nope");
      }
    }, 3000);
  });
};

// Ngay tại lúc này mình có biết được Promise sẽ trả về thành công hay thất bại không?
// Chắc chắn không vì nó có thể thành công hoặc thất bại.
// State: pending
const promise_1 = createPromise();

promise_1
  // State: fulfill - Thành công
  .then((resp) => {
    console.log(resp); // ??? -> Okay
  })
  // State: reject - Thất bại
  .catch((resp) => {
    console.log(resp); // ??? -> Nope
  })
  .finally(() => {
    console.log("End !!!");
  });

const promise_2 = createPromise();

promise_2
  .then((resp) => {
    console.log(resp); // ??? -> Okay
  })
  .then((resp) => {
    console.log(resp); // ??? -> undefined:

    /**
     * Vì .then trước đó không có return đồng nghĩa với return undefined
     * Vì vậy kết quả của xử lý .then trước đó (1) sẽ sinh ra một promise thành công với giá trị undefined
     *
     * (1): promise_2.then((resp) => {console.log(resp)})
     */

    return 10;
  })
  .then((resp) => {
    console.log(resp); // ??? -> 10

    /**
     * Vì .then trước đó có return 10
     * Vì vậy kết quả của xử lý .then trước đó (2) sẽ sinh ra một promise thành công với giá trị 10
     *
     * (1): promise_2.then((resp) => {console.log(resp)}).then(resp => {console.log(resp); return 10;})
     */
  });

const promise_3 = createPromise();
promise_3
  .then((resp) => {
    console.log(resp); // ??? có thể xảy ra hoặc không -> nếu xảy ra thì (Okay)
    return 10;
  }) // (1)
  .catch((resp) => {
    console.log(resp); // ??? có thể xảy ra hoặc không -> nếu xảy ra thì (Nope)
    return 10;
  }) // (2)
  .then((resp) => {
    console.log(resp); // ??? chắc chắn xảy ra -> (10)
    /**
     * Vì .then (1) hay .catch (2) đều return 10 -> có nghĩa là trả về một Promise thành công giá trị 10
     */

    return Promise.reject("Error !!!!!!");
  }) // (3)
  .then((resp) => {
    console.log(resp); // ??? Không bao giờ xảy ra
    /**
     * Vì .then trước đó (3) return về Promise.reject() có nghĩa là trả về một Promise thất bại
     * Nên chắc chắn không vào .then
     */
  }) // (4)
  .catch((resp) => {
    console.log(resp); // ??? chắc chắn xảy ra -> ("Error !!!!!!")
    /**
     * Vì .then trước đó (3) return về Promise.reject() có nghĩa là trả về một Promise thất bại
     * Nên chắc chắn sẽ vào catch
     */
  });
