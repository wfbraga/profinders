class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :city
      t.string :state
      t.string :country
      t.string :contact_number

      t.timestamps
    end
  end
end
