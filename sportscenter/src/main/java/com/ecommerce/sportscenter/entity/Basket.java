package com.ecommerce.sportscenter.entity;

import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.redis.core.RedisHash;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@RedisHash("Basket")
public class Basket {
    public Basket(String id) {
        this.id = id;
    }
    @Id
    private String id;
    private List<BasketItem> items = new ArrayList<>();
    }

