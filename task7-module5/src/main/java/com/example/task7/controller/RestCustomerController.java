package com.example.task7.controller;

import com.example.task7.model.Customer;
import com.example.task7.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/customers")
public class RestCustomerController {
    @Autowired
    private ICustomerService customerService;
    @GetMapping("")
    public ResponseEntity<List<Customer>> getAll(
            @RequestParam(name = "name_like",defaultValue = "") String name,
            @RequestParam(name = "typeCustomer.name_like",defaultValue = "") String typeCustomer
    ){
        List<Customer> customers = customerService.getAll(name,typeCustomer);
        if(customers.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(customers,HttpStatus.OK);
        }
    }
    @PostMapping("")
    public ResponseEntity<String> createCustomer(@RequestBody Customer customer){
        customerService.add(customer);
        return ResponseEntity.ok("Thêm thành công!");
    }
    @GetMapping("/{id}")
    public ResponseEntity<Customer> findById(@PathVariable int id){
        Customer customer = customerService.findById(id);
        return new ResponseEntity<>(customer,HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> updateCustomer(@PathVariable int id, @RequestBody Customer customer){
        customerService.update(id, customer);
        return ResponseEntity.ok("Sửa thành công!");
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable int id){
        customerService.delete(id);
        return ResponseEntity.ok("Xóa thành công!");
    }
}
