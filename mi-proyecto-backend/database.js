const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("miBaseDeDatos.db");

db.serialize(() => {
  db.run("DROP TABLE IF EXISTS sabores");
  db.run("DROP TABLE IF EXISTS productos");
  db.run(
    "CREATE TABLE IF NOT EXISTS regiones (id INTEGER PRIMARY KEY, nombre TEXT)"
  );
  db.run(
    "CREATE TABLE IF NOT EXISTS comunas (id INTEGER PRIMARY KEY, nombre TEXT, id_region INTEGER)"
  );
  db.run(
    "CREATE TABLE sabores (id INTEGER PRIMARY KEY, nombre TEXT, descripcion TEXT)"
  );

  // Crear la tabla productos con una clave foránea que referencia a sabores
  db.run(
    "CREATE TABLE productos (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, descripcion TEXT, sabor_id INTEGER, precio REAL NOT NULL, sku TEXT, imagen TEXT, cantidad INTEGER, FOREIGN KEY(sabor_id) REFERENCES sabores(id))"
  );
});
/* db.get("SELECT COUNT(*) AS count FROM sabores", (err, row) => {
  if (err) {
    console.error(err.message);
    return;
  }

  if (row.count === 0) {
    const insertarSabor = db.prepare(
      "INSERT INTO sabores (nombre, descripcion) VALUES (?, ?)"
    );
    insertarSabor.run("Vainilla", "Sabor suave y dulce de vainilla");
    insertarSabor.run("Chocolate", "Sabor intenso y cremoso de chocolate");
    insertarSabor.run("Fresa", "Sabor fresco y frutal de fresa");
    insertarSabor.run("Lima", "Sabor cítrico y refrescante de lima");
    insertarSabor.finalize();
  }
}); */
/* db.get("SELECT COUNT(*) AS count FROM productos", (err, row) => {
    if (err) {
      console.error(err.message);
      return;
    }
  
    if (row.count === 0) {
      const insertarSabor = db.prepare(
  "INSERT INTO productos (nombre, descripcion, precio, sku,imagen, cantidad, sabor_id) VALUES (?, ?, ?,?, ?, ?, ?)"
);
      insertarSabor.run("Vainilla", "Sabor suave y dulce de vainilla");
      insertarSabor.run("Chocolate", "Sabor intenso y cremoso de chocolate");
      insertarSabor.run("Fresa", "Sabor fresco y frutal de fresa");
      insertarSabor.run("Lima", "Sabor cítrico y refrescante de lima");
      insertarSabor.finalize();
    }
  }); */

const insertarSabor = db.prepare(
  "INSERT INTO sabores (nombre, descripcion) VALUES (?, ?)"
);
insertarSabor.run("Vainilla", "Sabor suave y dulce de vainilla");
insertarSabor.run("Chocolate", "Sabor intenso y cremoso de chocolate");
insertarSabor.run("Fresa", "Sabor fresco y frutal de fresa");
insertarSabor.run("Lima", "Sabor cítrico y refrescante de lima");
insertarSabor.finalize();

const insertarProducto = db.prepare(
  "INSERT INTO productos (nombre, descripcion, precio, sku,imagen, cantidad, sabor_id) VALUES (?, ?, ?,?, ?, ?, ?)"
);
insertarProducto.run(
  "Producto de Vainilla",
  "Exclusiva formula proteica a base de leche de suero aislado e hidriolizado que ha sido cientificamente disenado para construir musculo magro libre de grasa,aumentar la fuerza y mejorar el rendimiento deportivo, cada porcion contiene 30g de proteina y rico sabor a vainilla",
  20.99,
  "sku1234234",
  "urlImagenVainilla.jpg",
  5,
  1
);
insertarProducto.run(
  "Producto de Chocolate",
  "Exclusiva formula proteica a base de leche de suero aislado e hidriolizado que ha sido cientificamente disenado para construir musculo magro libre de grasa,aumentar la fuerza y mejorar el rendimiento deportivo, cada porcion contiene 30g de proteina y rico sabor a chocolate",
  25.99,
  "sku123555",
  "urlImagenChocolate.jpg",
  10,
  2
);
insertarProducto.run(
  "Producto de Fresa",
  "Exclusiva formula proteica a base de leche de suero aislado e hidriolizado que ha sido cientificamente disenado para construir musculo magro libre de grasa,aumentar la fuerza y mejorar el rendimiento deportivo, cada porcion contiene 30g de proteina y rico sabor a fresa",
  15.99,
  "sku1235432",
  "urlImagenChocolate.jpg",
  1,
  3
);
insertarProducto.run(
  "Producto de Lima",
  "Exclusiva formula proteica a base de leche de suero aislado e hidriolizado que ha sido cientificamente disenado para construir musculo magro libre de grasa,aumentar la fuerza y mejorar el rendimiento deportivo, cada porcion contiene 30g de proteina y rico sabor a lima",
  10.99,
  "sku54254234",
  "urlImagenChocolate.jpg",
  3,
  4
);
insertarProducto.run(
  "Producto de Cafe",
  "Exclusiva formula proteica a base de leche de suero aislado e hidriolizado que ha sido cientificamente disenado para construir musculo magro libre de grasa,aumentar la fuerza y mejorar el rendimiento deportivo, cada porcion contiene 30g de proteina y rico sabor a cafe",
  30.99,
  "sku8678234",
  "urlImagenChocolate.jpg",
  4,
  5
);
insertarProducto.finalize(); 

    db.run("DELETE FROM regiones", (err) => {
    if (err) {
        console.error("Error al vaciar la tabla regiones:", err.message);
    }
    });

    function insertarComunas(datos) {
    const stmt = db.prepare(
        "INSERT OR IGNORE INTO comunas (id, nombre, id_region) VALUES (?, ?, ?)"
    );
    db.serialize(() => {
        for (const { ID, commune, id_region } of datos) {
        stmt.run(ID, commune, id_region, (err) => {
            if (err) {
            console.error(err.message);
            }
        });
        }
        stmt.finalize();
    });
    }

    function agregarColumnaIdRegionSiNoExiste() {
    db.run("ALTER TABLE regiones ADD COLUMN id_region INTEGER", (err) => {
        if (err && !err.message.includes("duplicate column name")) {
        console.error("Error al agregar la columna 'id_region':", err.message);
        } else if (!err) {
        console.log("Columna 'id_region' agregada a la tabla 'regiones'");
        }
    });
    }
    agregarColumnaIdRegionSiNoExiste();

    function insertarRegiones(datos) {
    const stmt = db.prepare(
        "INSERT OR IGNORE INTO regiones (id, nombre) VALUES (?, ?)"
    );
    db.serialize(() => {
        for (const { ID, region } of datos) {
        stmt.run(ID, region, (err) => {
            if (err) {
            console.error("Error al insertar región:", err.message);
            }
        });
        }
        stmt.finalize();
    });
    }

module.exports = {
  db,
  insertarRegiones,
  insertarComunas,
};
