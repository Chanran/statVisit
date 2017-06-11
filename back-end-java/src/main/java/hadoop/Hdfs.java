package hadoop;

/**
 * Created by huimin on 17-6-10.
 */

import java.io.*;

import hibernate.Log;
import hibernate.Operation;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FSDataInputStream;
import org.apache.hadoop.fs.FileStatus;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IOUtils;

public class Hdfs {
    static Configuration conf = new Configuration();
    static FileSystem hdfs;
    static {
        String path = "/home/huimin/hadoop/etc/hadoop/";
        conf.addResource(new Path(path + "core-site.xml"));
        conf.addResource(new Path(path + "hdfs-size.xml"));
        conf.addResource(new Path(path + "mapred-site.xml"));
        try {
            hdfs = FileSystem.get(conf);
        }catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 读取hdfs文件内容，并在控制台打印出来
     *
     * @param filePath
     * @throws IOException
     */
    public static void readLogAndStat(String filePath) throws IOException {

        Path file = new Path(filePath);
        FSDataInputStream in = null;
        InputStreamReader inr = null;
        BufferedReader read = null;
        String line = "";

        try {
            in = hdfs.open(file);
            inr = new InputStreamReader(in);
            read = new BufferedReader(inr);

            while((line = read.readLine()) != null) {
                System.out.println(line);
                String ip = line.substring(7,line.indexOf(" "));
                String time = line.substring(line.indexOf("at")+3);
                //System.out.println(ip);
                //System.out.println(time);

                // data model
                Log log = new Log();
                log.setIp(ip);
                log.setTime(time);
                log.setLog_text(line);

                // insert into mysql
                Operation operation = new Operation();
                operation.save(log);
            }
        } finally {
            IOUtils.closeStream(in);
        }
    }

    //list all files
    public static void listFiles(String dirName) throws IOException {
        Path f = new Path(dirName);
        FileStatus[] status = hdfs.listStatus(f);
        System.out.println(dirName + " has all files:");
        for (int i = 0; i< status.length; i++) {
            System.out.println(status[i].getPath().toString());
        }
    }
}
