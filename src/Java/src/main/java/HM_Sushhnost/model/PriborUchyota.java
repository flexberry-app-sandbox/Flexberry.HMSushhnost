package HM_Sushhnost.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HM_Sushhnost.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПриборУчёта
 */
@Entity(name = "IISHM_SushhnostПриборУчёта")
@Table(schema = "public", name = "ПриборУчёта")
public class PriborUchyota {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PriboryZd")
    @Convert("PriboryZd")
    @Column(name = "ПриборыЗд", length = 16, unique = true, nullable = false)
    private UUID _priboryzdid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PriboryZd", insertable = false, updatable = false)
    private PriboryZd priboryzd;


    public PriborUchyota() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getid() {
      return id;
    }

    public void setid(Integer id) {
      this.id = id;
    }

    public String getname() {
      return name;
    }

    public void setname(String name) {
      this.name = name;
    }


}