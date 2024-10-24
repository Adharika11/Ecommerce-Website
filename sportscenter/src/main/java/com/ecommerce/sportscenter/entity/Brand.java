package com.ecommerce.sportscenter.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity  //Marks this class as a JPA entity, meaning it maps to a table in the database.
@Table(name="Brand") //Specifies the name of the database table (Brand) that this entity maps to. If you don't provide this, it defaults to the class name.
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder //Allows you to use the builder pattern to construct instances of the Brand class.
public class Brand {
    @Id //Marks id as the primary key of the Brand entity.
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Specifies that the primary key (id) should be automatically generated by the database, typically using an auto-increment strategy.
    @Column(name="id") // These specify that the fields id and name correspond to columns in the database table. Without @Column, JPA assumes the column names are the same as the field names.
    private Integer id;
    @Column(name="name")
    private String name;
}
