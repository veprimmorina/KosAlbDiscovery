package com.example.demo.Application.InputPort;

public interface EmailInputPort {
    public void sendMessage(String to, String subject, String text);
}
