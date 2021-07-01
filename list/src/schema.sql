CREATE TABLE todolist (
    id SERIAL,
    todo VARCHAR(255),
    iskept BOOLEAN,
    logtime DATE DEFAULT CURRENT_TIME(5)    
);