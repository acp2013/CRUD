
import http from "./http-common"


  class CostService {
    getAll() {
      return http.get("/customers");
    }
  
    get(id) {
      return http.get(`/customer/${id}`);
    }
  
    create(data) {
      return http.post("/customer", data);
    }
  
    update(id, data) {
      return http.put(`/customer/${id}`, data);
    }
  
    delete(id) {
      return http.delete(`/customer/${id}`);
    }
  
    deleteAll() {
      return http.delete(`/tutorials`);
    }
  
  }
  
  export default new CostService();