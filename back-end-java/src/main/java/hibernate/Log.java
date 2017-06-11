package hibernate;

/**
 * Created by huimin on 17-6-10.
 */

import java.util.Date;


public class Log {
    private String id;
    private String ip;
    private String log_text;
    private String time;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getLog_text() {
        return log_text;
    }

    public void setLog_text(String log_text) {
        this.log_text = log_text;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
