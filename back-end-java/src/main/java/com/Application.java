package com;

/**
 * Created by huimin on 17-6-9.
 */
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import hadoop.Hdfs;
import org.springframework.boot.SpringApplication;

public class Application {



    static String dirPath = "/log/";

    public static void main(String[] args) {

        SpringApplication.run(Application.class, args);

        Hdfs hdfs = new Hdfs();
        try {
            Date date = new Date();

            DateFormat format = new SimpleDateFormat("YYYYMMdd");

            String today = format.format(date);

            Hdfs.readLogAndStat(dirPath + today + ".log");
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}